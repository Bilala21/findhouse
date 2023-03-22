import { IncomingForm } from 'formidable'
import mv from "mv"
import PropertyForRent from '../../../../models/PropertyForRent';
import PropertyForSale from '../../../../models/PropertyForSale';


export const config = {
    api: {
        bodyParser: false,
    }
};

export default async (req, res) => {
    const db_objec={
        media:[]
    }
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
        form.parse(req, (err, fields, files) => {           
            if (err) return reject(err)
            Object.keys(files).forEach(media => {
                const path=new Date().getTime()+"."+files[media].mimetype.slice(files[media].mimetype.lastIndexOf("/") + 1);
                var oldPath = files[media].filepath;
                var newPath = `./public/uploads/${path}`;
                mv(oldPath, newPath, function(err) {
                });
                db_objec.media.push(path)
            })            
            Object.keys(fields).forEach(field_name=>{
                if(field_name=== "neighbourhood"){
                    db_objec[field_name]=fields[field_name].split(",")
                    console.log(fields[field_name].split(","));
                }
                else if(field_name == "amenties"){
                    db_objec[field_name]=fields[field_name].split(",")
                }
                else if(field_name !== "neighbourhood" && field_name !== "amenties"){
                    db_objec[field_name]=fields[field_name]               
                }
            })

            uploadtFormData(res,db_objec)
        })
    })

}

const uploadtFormData = async (res, data)=>{
   if(data.slug === "property-for-sale"){
    const res_data = await PropertyForSale.create(data);
    return res.status(200).json({"message":"ok","statusCode":201})
   }
   if(data.slug === "property-for-rent"){
    const res_data = await PropertyForRent.create(data);
    return res.status(200).json({"message":"ok","statusCode":201})
   }
   return res.send(0)
    
}