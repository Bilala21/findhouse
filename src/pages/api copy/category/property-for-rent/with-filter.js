import initDb from "../../../../../helpers/dbConnection"
import { sendResponse } from "../../../../../helpers/responseSender"
import ChildCategory from "../../../../../models/ChildCategory"
import Category from "../../../../../models/Category"
import PropertyForRent from "../../../../../models/PropertyForRent"

initDb()
export const config = {
    api: {
        bodyParser: true,
        externalResolver: true,
    },
}

export default async function handler(req, res) {
    let data = undefined;
    if (req.body.neighbourhood < 1) {
        delete req.body.neighbourhood
    }
    if (req.body.amenties < 1) {
        delete req.body.amenties
    }

    const maxprice = req.body.maxprice;
    const minprice = req.body.minprice;

    const maxsize = req.body.maxsize;
    const minsize = req.body.minsize;

    delete req.body.limit

    delete req.body.maxsize;
    delete req.body.minsize;

    delete req.body.maxprice;
    delete req.body.minprice;

    const pageOptions = {
        page: parseInt(req.body.page) || 0,
        limit: parseInt(req.body.limit) || 20,
    };

    const price = [
        minprice ? { price: { $gt: minprice } } : {},
        maxprice ? { price: { $lt: maxprice } } : {},
    ];

    const size = [
        minsize ? { size: { $gt: minsize } } : {},
        maxsize ? { size: { $lt: maxsize } } : {},
    ];

    const filters = { ...req.body, $and: [...price, ...size] };

    const { _id } = await Category.findOne({ "slug": "property-for-rent" }, { _id: 1 }).lean().exec();

    const property_for_sale = await PropertyForRent.find(filters)
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ created_at: -1 })
        .lean();

    if (property_for_sale.length) {
        const property_for_sale_sub_categories = await ChildCategory.find({ "parent_category_id": _id })
        data = { property_for_sale, property_for_sale_sub_categories }
    }
    !data || data.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}

