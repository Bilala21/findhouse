
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse} from "../../../../../helpers/responseSender"
import Category from "../../../../../models/Category"
import ChildCategory from "../../../../../models/ChildCategory"
import PropertyForRent from "../../../../../models/PropertyForRent"

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}

export default async function handler(req, res) {  
    const {_id} = await Category.findOne({"slug":"property-for-rent"},{_id:1}).lean().exec();
    const property_for_rent_sub_categories = await ChildCategory.find({"parent_category_id":_id}).lean().exec();
    const property_for_rent = await PropertyForRent.find({}).lean().exec();
    const data = { property_for_rent, property_for_rent_sub_categories }
    !property_for_rent || property_for_rent.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
    res.end();
}




