import slugify from "slugify"
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
import Category from "../../../../models/Category"
import asyncHandler from "express-async-handler"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default asyncHandler(async (req, res) => {
    console.log(req.body)
    return res.send(req.body)

    let result = undefined;
    switch (req.method) {
        case "GET":
            result = await Category.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
            !result || result.length < 1 ? notFound(res, 404) : sendResponse(res, result, 200);
            break;
        case "POST":
            const {body} = req.body
            if (body.main_category === undefined || body.main_category === "") {
                fieldValidationError(res, 403)
            }
            body.slug = slugify(body.main_category)
            result = await Category.create(body)
            !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
            break;
        default:
            return res.json("Internal server error")
    }






    // Object.keys(body).forEach(el => {
    //     if (el === "main_category") {
    //         insertInfoTable({ name: body[el], slug: slugify(body[el]) }, res)
    //     }
    // })
})

// const insertInfoTable = async (body, res) => {
//     const category = await Category.create(body);
//     return res.json(category)

// }

