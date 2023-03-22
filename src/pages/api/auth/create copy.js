
import initDb from "../../../../helpers/dbConnection"
import { sendResponse, dbError, fieldValidationError } from "../../../../helpers/responseSender"
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
    let response = undefined;
    const data = JSON.parse(req.body)
    const dublicate = await User.findOne({ email: data.email })

    if (data.username === "" || data.email === "" || data.password === "") {
        sendResponse(res, "faild", "All fields required","", 403);
    }   
    else if (!dublicate) {
        const pass = await bcrypt.hash(data.password, 10);
        data.password = pass
        response = await User.create(data);
        const user={username:response.username,email:response.email,id:response._id}
        !response || response.length < 1 ? dbError(res, 404) : sendResponse(res, "ok","success", user, 201);
    }
    else {
        sendResponse(res, "faild", 'Email is already taken',"", 409);
    }
    res.end()
   
})

