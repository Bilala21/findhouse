const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = require('./Category')

const childCategorySchema = new Schema({
    parent_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:false,
        ref: Category
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    sub_types: [new mongoose.Schema(
        {
            parent_type_id: {
                type: mongoose.Schema.Types.ObjectId,
                required:false
            },
            name: {
                type: String,
                required: false,
            },
            slug: {
                type: String,
                required: false,
            }
        }

    )]
})

module.exports =mongoose.models.ChildCategory || mongoose.model('ChildCategory', childCategorySchema)