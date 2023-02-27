import slugify from "slugify"
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
import PropertyForSale from "../../../../models/PropertyForSale"
import PropertyForRent from "../../../../models/PropertyForRent"
import asyncHandler from "express-async-handler"
import ChildCategory from "../../../../models/ChildCategory"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default function productFilter (req, res) {
    if (req.body.neighbourhood < 1) {
        delete req.body.neighbourhood
    }
    if (req.body.amenties < 1) {
        delete req.body.amenties
    }
    const pageOptions = {
        page: parseInt(req.body.page) || 0,
        limit: parseInt(req.body.limit) || 20,
    };


    if (req.query.slug === "property-for-rent") {
        filterFun(PropertyForRent, req, res, pageOptions);
    }

    else if (req.query.slug === "property-for-sale") {
        filterFun(PropertyForSale, req, res, pageOptions);
    }

    else{
        return res.status(403).send({message:"Query param is required"})
    }

}

const filterFun = asyncHandler(async (Table, req, res, pageOptions) => {
    let result=undefined;
    const maxprice = req.body.maxprice;
    const minprice = req.body.minprice;

    const maxsize = req.body.maxsize;
    const minsize = req.body.minsize;

    delete req.query.slug;

    delete req.body.limit

    delete req.body.maxsize;
    delete req.body.minsize;

    delete req.body.maxprice;
    delete req.body.minprice;

    const price = [
        minprice ? { price: { $gt: minprice } } : {},
        maxprice ? { price: { $lt: maxprice } } : {},
    ];

    const size = [
        minsize ? { size: { $gt: minsize } } : {},
        maxsize ? { size: { $lt: maxsize } } : {},
    ];

    const filters = { ...req.body, $and: [...price, ...size] };

    const products = await Table.find(filters)
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({created_at: -1})
        .lean();
        
        if(products.length){
            const childcategory = await ChildCategory.find({_id:"63fa5c3e60a83b3c8405716f"})
            result={products,childcategory}
            sendResponse(res, result, 200);
        }
        else if(products.length < 1){
            !result || result.length < 1 && notFound(res, 404)
        }

});
