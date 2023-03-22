import slugify from "slugify"
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
import PropertyForSale from "../../../../models/PropertyForSale"
import PropertyForRent from "../../../../models/PropertyForRent"
import asyncHandler from "express-async-handler"


initDb()

export const config = {
    api: {
        bodyParser: true,
    },
}

export default asyncHandler(async (req, res) => {
  let result=undefined
    const { parent_category_id, category_type, property_type } = req.body.searchFilter
    
    if (parent_category_id === undefined || parent_category_id === "" || category_type === undefined || category_type === "") {
        fieldValidationError(res, 403)
    }
    req.body.slug = slugify(property_type?.toLocaleLowerCase())
    req.body.slug =property_type

    if (category_type === "property-for-rent") {
        result = await PropertyForRent.create(req.body)
    }
    else if (category_type === "property-for-sale") {
        result = await PropertyForSale.create(req.body.searchFilter)
    }
    !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
})