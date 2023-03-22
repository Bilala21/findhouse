const mongoose = require('mongoose')
var Schema = mongoose.Schema;



const categoryTestSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
    },
    sub_category:[{

        name: {
            type: String,
            required: false
        },
        slug: {
            type: String,
            required: false
        },
        sub_types: [{
            name: {
                type: String,
                required: false
            },
            slug: {
                type: String,
                required: false
            },
            default:[]
        }]
    }]
})

module.exports = mongoose.models.categorytests || mongoose.model('CategoryTest', categoryTestSchema)