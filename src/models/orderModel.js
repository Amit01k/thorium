const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId;//this is use for the take response




const orderSchema=new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"product"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:Date,
})

module.exports=mongoose.model("order",orderSchema)
