const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ChildCategory = require('../models/ChildCategory')

const propertyForRentSchema = new Schema({
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
    country: {
        type: String,
        required: false
    },
    city: {
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
    property_type: {
        type: String,
        required: false
    },
    bedrooms: {
        type: Number,
        required: false
    },
    bathrooms: {
        type: Number,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    furnished_unfurnished: {
        type: String,
        required: false
    },
    rent_is_paid: {
        type: String,
        required: false
    },
    property_reference: {
        type: String,
        required: false
    },
    listed_by: {
        type: String,
        required: false
    },
    real_estate_agent: {
        type: String,
        required: false
    },
    amenties: {
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
    mini_contract_priod_in_months: {
        type: Number,
        required: false
    },
    notice_period_in_months: {
        type: Number,
        required: false
    },
    security_deposit: {
        type: Number,
        required: false
    },
    preferred_tenant_nationality: {
        type: String,
        required: false
    },
    number_of_tenants: {
        type: Number,
        required: false
    },
    daily_monthly: {
        type: String,
        required: false
    },
    type_of_tenant_allowed: {
        type: Number,
        required: false
    },
    slug: {
        type: String,
        required: false
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

},
    { timestamps: true }
)

module.exports = mongoose.models.PropertyForRent || mongoose.model('PropertyForRent', propertyForRentSchema)
