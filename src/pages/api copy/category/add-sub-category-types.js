
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
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
        const { parent_type_id, name } = req.body

        if (parent_type_id === undefined || parent_type_id === "" || name === undefined || name === "") {
            fieldValidationError(res, 403)
        }
        const duplicate_doc = await ChildCategory.findOne({ _id: parent_type_id }).lean().exec();

        if (duplicate_doc.sub_types.some(item => item.name === name)) {
            return res.status(422).send({ "message": "Duplicate error" });
        }


        req.body.slug = slugify(name.toLocaleLowerCase())

        const doc = await ChildCategory.findOne({ _id: parent_type_id })

        doc.sub_types.push(req.body)

        result = await doc.save();
    }

    !result || Object.keys(result).length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);

    res.end();

})

