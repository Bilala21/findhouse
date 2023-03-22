const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ChildCategory = require('./ChildCategory')

const vihecleSchema = new Schema({
    parent_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ChildCategory
    },
    media: {
        type: Array,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    condition: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    neighbourhood: {
        type: Array,
        required: false
    },
    video_link: {
        type: String,
        required: false
    },
    youtube_link: {
        type: String,
        required: false
    },
    maker: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    build_year: {
        type: Date,
        required: false
    },
    kilometers: {
        type: Number,
        required: false
    },
    warranty: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    regional_specs: {
        type: String,
        required: false
    },
    chassis_number: {
        type: String,
        required: false
    },
    body_type: {
        type: String,
        required: false
    },
    doors: {
        type: String,
        required: false
    },
    product_type: {
        type: String,
        required: false
    },
    product_type: {
        type: String,
        required: false
    },
    body_condition: {
        type: String,
        required: false
    },
    engine_condition: {
        type: String,
        required: false
    },
    no_of_cylinder: {
        type: String,
        required: false
    },
    fuel_type: {
        type: String,
        required: false
    },
    transmission_type: {
        type: String,
        required: false
    },
    sub_type: {
        type: String,
        required: false
    },
    usage: {
        type: String,
        required: false
    },
    final_driven_system: {
        type: String,
        required: false
    },
    wheel: {
        type: String,
        required: false
    },
    capacity_weight: {
        type: String,
        required: false
    },
    horse_power: {
        type: String,
        required: false
    },
    engine_size: {
        type: String,
        required: false
    },
    steering_side: {
        type: String,
        required: false
    },
    seller_type: {
        type: String,
        required: false
    },
    extras: {
        type: Array,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    pricing: {
        type: Number,
        required: false
    },
    call_for_price: {
        type: Boolean,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.models.Vehicle || mongoose.model('Vehicle', vihecleSchema)

