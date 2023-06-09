const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ChildCategory = require('./ChildCategory')

const propertyForSaleSchema = new Schema({
    parent_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:ChildCategory,
        required: false,
    },
    media:{
        type:Array,
        required:false
    },
    title:{
        type:String,
        required:false
    },

    description:{
        type:String,
        required:false
    },
    condition:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    neighbourhood:{
        type:Array,
        required:false
    },
    video_link:{
        type:String,
        required:false
    },
    property_type:{
        type:String,
        required:false
    },
    bedrooms:{
        type:Number,
        required:false
    },
    bathrooms:{
        type:Number,
        required:false
    },
    size:{
        type:Number,
        required:false
    },
    developer:{
        type:String,
        required:false
    },
    freehold:{
        type:Boolean,
        required:false
    },
    property_reference:{
        type:String,
        required:false
    },    
    occupancy_status:{
        type:String,
        required:false
    },    
    community_fees:{
        type:Number,
        required:false
    },
    buyer_transfer_fees:{
        type:Number,
        required:false
    },
    seller_transfer_fees:{
        type:Number,
        required:false
    },
    maintenance_fees:{
        type:Number,
        required:false
    },
    seller_type:{
        type:String,
        required:false
    },
    real_estate_agent:{
        type:String,
        required:false
    },
    zoned_for:{
        type:String,
        required:false
    },
    amenties:{
        type:Array,
        required:false
    },
    call_for_price:{
        type:Boolean,
        required:false
    },
    pricing:{
        type:Number,
        required:false
    },
    quantity:{
        type:Number,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    slug:{
        type:String,
        required:false
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},
{
    timestamps:true
})

module.exports =mongoose.models.PropertyFarSale || mongoose.model('PropertyFarSale', propertyForSaleSchema)
