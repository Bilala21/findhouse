
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse } from "../../../../../helpers/responseSender"
import slugify from "slugify"
import PropertyForRent from "../../../../../models/PropertyForRent"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}

export default async function handler(req, res) {
    const { parent_category_id, category_type, property_type } = req.body
    let data = undefined;

    if (parent_category_id === undefined || parent_category_id === "" || category_type === undefined || category_type === "") {
        sendResponse(res, "faild", "Category type required,", [], 403)
    }
    req.body.slug = slugify(property_type.toLocaleLowerCase())
    data = await PropertyForRent.create(req.body)
    !data || data.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}




