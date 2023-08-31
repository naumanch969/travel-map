import { Schema, model } from "mongoose";

const pinSchema = Schema({
    name:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    rating:{
        type: Number,
    },
    latitude:{
        type: Number,
    },
    longitude:{
        type:Number,
    }
},{timestamps:true})

const pinModel = model('Pin',pinSchema)
export default pinModel