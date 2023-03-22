
import initDb from "../../../../helpers/dbConnection"
import { sendResponse} from "../../../../helpers/responseSender"
import Category from "../../../../models/Category"
import asyncHandler from "express-async-handler"
import ChildCategory from "../../../../models/ChildCategory"


initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default asyncHandler(async (req, res) => {
    const categories = await Category.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
    const sub_categories= await ChildCategory.find({}).collation({ locale: 'en', strength: 2 }).lean().exec()
    const data={categories,sub_categories}
    !data || data.length < 1 ? sendResponse(res, "faild", "Not create", [], 404) : sendResponse(res, "ok", "success", data, 200);
})

