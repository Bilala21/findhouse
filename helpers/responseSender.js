export const sendResponse = (res,statusText,message,data,status) =>{
    return res.status(status).send({statusText, message,data,status});
}
export const notFound = (res,message,data,status) =>{
    return res.status(stcode).send({message,data,status})
}

export const dbError = (res,stcode) =>{
    return res.status(stcode).send({message:"Database error"})
}

export const duplicateError = (res,stcode) =>{
    return res.status(stcode).send({message:"Duplicate error"})
}
export const fieldValidationError = (res,stcode) =>{
    return res.status(stcode).send({message:"All fields required"})
}

