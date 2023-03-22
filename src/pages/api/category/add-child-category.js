
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError, duplicateError } from "../../../../helpers/responseSender"
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
        const { name, parent_category_id } = req.body;
        if (name === undefined || name === "" || parent_category_id === undefined || parent_category_id === "") {
            fieldValidationError(res, 403)
        }
        const duplicate = await ChildCategory.findOne({ "name": name }).lean().exec();
        if (duplicate) {
            return res.status(422).send({"message":"Duplicate error"});
        }

        req.body.slug = slugify(name.toLocaleLowerCase())
        result = await ChildCategory.create(req.body)
    }

    !result || Object.keys(result).length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);

    res.end();
})


