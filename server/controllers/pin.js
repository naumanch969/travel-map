import Pin from "../models/pin"


export const createPin = async (req,res)=>{
    try {
        const newPin = await Pin.create(req.body)
        res.status(200).json({result:newPin,message:'pin created successfully'})
    } catch (err) {
        res.status(500).json({error:err, message:'error in creating pin'})
    }
}

export const getPins = async (req,res)=>{
    try {
        const pins = await Pin.find()
        res.status(200).json({result:pins,message:'pin fetched successfully'})
    } catch (err) {
        res.status(500).json({error:err, message:'error in getting pins'})
    }
}