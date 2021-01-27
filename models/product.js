import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        required:true,
    },
    category:{
        type:Array,
        required:true,
    },
    checked:{
        type:Boolean,
        required:true,
    },
    inStock:{
        type:Number,
        required:true,
    },
    sold:{
        type:Number,
        required:true,
    },
},{
    timestamps:true,
})

let dataset = mongoose.models.product || mongoose.model("product" , productSchema);

export default dataset;