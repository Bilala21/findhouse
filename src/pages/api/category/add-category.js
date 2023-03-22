
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError, duplicateError } from "../../../../helpers/responseSender"
import Category from "../../../../models/Category"
import asyncHandler from "express-async-handler"
import ChildCategory from "../../../../models/ChildCategory"
import slugify from "slugify"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default asyncHandler(async (req, res) => {
    let result = undefined;

    if (req.method === "POST") {
        const name = req.body.name;
        if (name === undefined || name === "") {
            fieldValidationError(res, 403)
        }
        const duplicate = await Category.findOne({ "name": name }).lean().exec();
        if (!duplicate) {
            req.body.slug = slugify(name.toLocaleLowerCase())
            result = await Category.create(req.body);
        }
        duplicate && duplicateError(res, 422)

    }
    !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
    res.end();

    // let result = undefined;
    // switch (req.method) {
    //     case "GET":
    //         result = await Category.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
    //         !result || result.length < 1 ? notFound(res, 404) : sendResponse(res, result, 200);
    //         break;

    //     case "POST":
    //         if (req.body.category === "category") {
    //             if (req.body.name === undefined || req.body.name === "") {
    //                 fieldValidationError(res, 403)
    //             }
    //         }
    //         // const {body} = req.body

    //         if (req.body.category === "child_category") {
    //             if (req.body.parent_category_id === undefined || req.body.parent_category_id === "") {
    //                 fieldValidationError(res, 403)
    //             }
    //         }

    //         if (req.body.category === "sub_types") {
    //             if (req.body.parent_type_id === undefined || req.body.parent_type_id === "") {
    //                 fieldValidationError(res, 403)
    //             }
    //         }
    //         if (req.body.category === "category") {
    //             delete req.body.category
    //             req.body.slug = slugify(req.body.name.toLocaleLowerCase())
    //             result = await Category.create(req.body)
    //             !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
    //         }

    //         if (req.body.category === "child_category") {
    //             delete req.body.category
    //             req.body.slug = slugify(req.body.name.toLocaleLowerCase())
    //             result = await ChildCategory.create(req.body)
    //             !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
    //         }
    //         if (req.body.category === "sub_types") {
    //             delete req.body.category
    //             req.body.slug = slugify(req.body.name.toLocaleLowerCase())
    //             const doc = await ChildCategory.findOne({ _id: req.body.parent_type_id })
    //             doc.sub_types.push(req.body)
    //             result = await doc.save();
    //             !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
    //         }

    //         break;
    //     default:
    //         return res.json("Internal server error")
    // }
})

