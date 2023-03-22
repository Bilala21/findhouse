
import initDb from "../../../../helpers/dbConnection"
import { sendResponse} from "../../../../helpers/responseSender"
import asyncHandler from "express-async-handler"
import User from "../../../../models/User"
import bcrypt from 'bcrypt'

initDb()
export const config = {
    api: {
        bodyParser: true,
    },
}
export default asyncHandler(async (req, res) => {
    const data = JSON.parse(req.body)
    const exist = await User.findOne({ email: data.email })
    if (data.username === "" || data.email === "" || data.password === "") {
        sendResponse(res, "faild", "All fields required","", 403);
    }

    else if (exist) {
        const pass = await bcrypt.compare(data.password, exist.password);
        if (pass) {
            await User.findOne({email: data.email, password:pass})
            const user={username:exist.username,email:exist.email,id:exist._id,role:exist.role}
            sendResponse(res, "ok","success", user, 200)
        }
        !pass && sendResponse(res, "faild", 'Credential invalid',"", 404);
    }
    else {
        sendResponse(res, "faild", 'Credential invalid',"", 404);
    }
    res.end()

})

