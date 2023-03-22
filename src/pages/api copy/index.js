import initDb from "../../../helpers/dbConnection"
import { sendResponse } from "../../../helpers/responseSender"
import PropertyForSale from "../../../models/PropertyForSale"
import PropertyForRent from "../../../models/PropertyForRent"
import Category from "../../../models/Category"

initDb()
// export const config = {
//     api: {
//         bodyParser: true,
//         externalResolver: true,
//     },
// }

export default async function handler(req, res) {

    const pageOptions = {
        page: parseInt(req.body.page) || 0,
        limit: parseInt(req.body.limit) || 20,
    };

    const property_for_sale = await PropertyForSale.find({})
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ created_at: -1 })
        .lean().exec();
    const property_for_rent = await PropertyForRent.find({})
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ created_at: -1 })
        .lean().exec();
    const categories = await Category.find({}).lean().exec();

    const data = {
        property_for_sale: property_for_sale,
        property_for_rent: property_for_rent,
        categories: categories
    }
    if (property_for_sale.length || property_for_rent.length || categories.length) {
        sendResponse(res, "ok", 'success', data, 200);
    }
    sendResponse(res, "faild", 'Not found',[], 404);
    res.end();
}


