
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse } from "../../../../../helpers/responseSender"
import Vehicle from "../../../../../models/Vehicle"

initDb()
export const config = {
    api: {
        bodyParser: true,
        externalResolver: true,
    },
}

export default async function handler(req, res) {
    // const filter = req.body;
    const vehicle_data=JSON.parse(req.body);  
    const data = await Vehicle.create(vehicle_data);
    !data || data.length < 1 ? sendResponse(res, "faild", "Not create", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}