const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:0
    }
})

module.exports =mongoose.models.User || mongoose.model('User', userSchema)