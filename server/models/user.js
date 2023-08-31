import { Schema, model } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type: String,
    }
},{timestamps:true})

const userModel = model('User',userSchema)
export default userModel