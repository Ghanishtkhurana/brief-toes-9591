const express = require("express")
const { SkincareModel } = require("../Models/Skincare.model")



const SkinRoute = express.Router()

SkinRoute.post("/addskin",async(req,res)=>{
    const payload = req.body
    
    try{
const skin = new SkincareModel(payload)
await skin.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
    SkinRoute
}