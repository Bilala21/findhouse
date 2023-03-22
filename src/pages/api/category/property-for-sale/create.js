
import initDb from "../../../../../helpers/dbConnection"
import { sendResponse } from "../../../../../helpers/responseSender"
import PropertyForSale from "../../../../../models/PropertyForSale"
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
            cb(null,path.join(process.cwd(),'public','uploads'))
        },
        filename:function(req,file,cb){
            cb(null,new Date().getTime()+"-"+file.originalname)
        }
    })
})

// export default async function handler(req, res) {
//     res.send(12)
// }


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
        res.send({body: req.body,file:req.file});
    })

export default handler;

// export default async function handler(req, res) {
//     const { parent_category_id, category_type, property_type } = req.body
//     let data = undefined;

//     if (parent_category_id === undefined || parent_category_id === "" || category_type === undefined || category_type === "") {
//         sendResponse(res, "faild", "Category type required,", [], 403)
//     }
//     req.body.slug = slugify(property_type.toLocaleLowerCase())
//     data = await PropertyForSale.create(req.body)
//     !data || data.length < 1 ? sendResponse(res, "faild", "Not found", [], 404) : sendResponse(res, "ok", "success", data, 200);
//     res.end();
// }




