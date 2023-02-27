export const sendResponse = (res,data,stcode) =>{
    return res.status(stcode).send({message:"success",data:data})
}
export const notFound = (res,stcode) =>{
    return res.status(stcode).send({message:"Result not found"})
}

export const dbError = (res,stcode) =>{
    return res.status(stcode).send({message:"Database error"})
}
export const fieldValidationError = (res,stcode) =>{
    return res.status(stcode).send({message:"All fields required"})
}

