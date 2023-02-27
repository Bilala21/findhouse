import slugify from "slugify"
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
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
            result = await Category.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
            !result || result.length < 1 ? notFound(res, 404) : sendResponse(res, result, 200);
        case "POST":
            // const { body } = req.body
            const { name } = req.body
            if (name === undefined || name === "") {
                fieldValidationError(res, 403)
            }
            req.body.slug = slugify(name)
            result = await Category.create(req.body)
            !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
        default:
            return res.json("Internal server error")
    }






    // Object.keys(body).forEach(el => {
    //     if (el === "main_category") {
    //         insertInfoTable({ name: body[el], slug: slugify(body[el]) }, res)
    //     }
    // })
}

// const insertInfoTable = async (body, res) => {
//     const category = await Category.create(body);
//     return res.json(category)

// }

