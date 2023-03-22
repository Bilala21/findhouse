
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse} from "../../../../../helpers/responseSender"
import Category from "../../../../../models/Category"
import ChildCategory from "../../../../../models/ChildCategory"
import Vehicle from "../../../../../models/Vehicle"

initDb()
export const config = {
    api: {
        bodyParser: true,
        externalResolver: true,
    },
}

export default async function handler(req, res) {   

    const slug = req.url.slice(req.url.lastIndexOf('/') + 1)    
    const {_id} = await Category.findOne({"slug":slug},{_id:1}).lean().exec();
    const vehicle_categories = await ChildCategory.find({"parent_category_id":_id}).lean().exec();
    const vehilces = await Vehicle.find({}).lean().exec();
    const data = { vehilces, vehicle_categories }
    !data || data.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}