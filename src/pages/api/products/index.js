import slugify from "slugify"
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
import PropertyForSale from "../../../../models/PropertyForSale"
import PropertyForRent from "../../../../models/PropertyForRent"
import Category from "../../../../models/Category"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default async (req, res) => {
    let result = undefined;
    switch (req.method) {

        case "GET":
            const categories = await Category.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
            const forrent = await PropertyForRent.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
            const forsale = await PropertyForSale.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
            result = {categories, forsale, forrent }
            !result || result.length < 1 ? notFound(res, 404) : sendResponse(res, result, 200);

        case "POST":
            const { parent_category_id, category_type, property_type } = req.body
            
            if (parent_category_id === undefined || parent_category_id === "" || category_type === undefined || category_type === "") {
                fieldValidationError(res, 403)
            }
            req.body.slug = slugify(property_type)
            if(category_type === "property-for-rent"){               
                result = await PropertyForRent.create(req.body)
            }
            else if(category_type === "property-for-sale"){                
                result = await PropertyForSale.create(req.body)               
            }           
            !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200); 
                       
        default:
            return res.json("Internal server error")
    }
}
