
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
    // const filter=req.body;
    const filter=JSON.parse(req.body);
    const data = await Vehicle.find(filter).lean().exec();
    !data || data.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}