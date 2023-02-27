const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.category || mongoose.model('category', categorySchema)