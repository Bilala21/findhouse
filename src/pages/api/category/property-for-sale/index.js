
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse} from "../../../../../helpers/responseSender"
import PropertyForSale from "../../../../../models/PropertyForSale"
import Category from "../../../../../models/Category"
import ChildCategory from "../../../../../models/ChildCategory"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}

export default async function handler(req, res) {  
    const {_id} = await Category.findOne({"slug":"property-for-sale"},{_id:1}).lean().exec();
    const property_for_sale_sub_categories = await ChildCategory.find({"parent_category_id":_id}).lean().exec();
    const property_for_sale = await PropertyForSale.find({}).lean().exec();
    const data = { property_for_sale, property_for_sale_sub_categories }
    !property_for_sale || property_for_sale.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}




