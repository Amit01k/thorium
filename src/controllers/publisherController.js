const publisherModel=require("../models/publisher")

const publisherData=async function(req,res){
    let publisher=req.body
    let publisherCreate=await publisherModel.create(publisher)
    res.send({msg:publisherCreate})
}


const getDataPublisher=async function(req,res){
    let data=await publisherModel.find()
    res.send({msg:data})
}
module.exports.publisherData=publisherData
module.exports.getDataPublisher=getDataPublisher