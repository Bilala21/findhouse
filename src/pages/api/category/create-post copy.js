
import initDb from "../../../../helpers/dbConnection"
import { sendResponse } from "../../../../helpers/responseSender"
import PropertyForSale from "../../../../models/PropertyForSale"
import slugify from "slugify"
import nc from "next-connect"
import multer from "multer"
import path from "path"

initDb()
export const config = {
    api: {
        bodyParser: false,
    },
}

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            console.log(23456);
            cb(null,path.join(process.cwd(),'public','uploads'))
        },
        filename:function(req,file,cb){
            console.log(23456);
            cb(null,new Date().getTime()+"-"+file.originalname)
        }
    })
})

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
.use(upload.single("media"))
    .post((req, res) => {
       
        res.send({body: req.body});
    })

export default handler;










































// import slugify from "slugify"
// import initDb from "../../../../helpers/dbConnection"
// import { sendResponse, notFound, dbError, fieldValidationError } from "../../../../helpers/responseSender"
// import PropertyForSale from "../../../../models/PropertyForSale"
// import PropertyForRent from "../../../../models/PropertyForRent"
// import asyncHandler from "express-async-handler"


// initDb()

// export const config = {
//     api: {
//         bodyParser: true,
//     },
// }

// export default asyncHandler(async (req, res) => {
//   let result=undefined
//     const { parent_category_id, category_type, property_type } = req.body.searchFilter
    
//     if (parent_category_id === undefined || parent_category_id === "" || category_type === undefined || category_type === "") {
//         fieldValidationError(res, 403)
//     }
//     req.body.slug = slugify(property_type?.toLocaleLowerCase())
//     req.body.slug =property_type

//     if (category_type === "property-for-rent") {
//         result = await PropertyForRent.create(req.body)
//     }
//     else if (category_type === "property-for-sale") {
//         result = await PropertyForSale.create(req.body.searchFilter)
//     }
//     !result || result.length < 1 ? dbError(res, 404) : sendResponse(res, result, 200);
// })