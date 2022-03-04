const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const basic=async function(req,res){
    console.log("this is called by middleware")
    res.send("this is calle by middlewaare and this is send by sre.send")
}
module.exports.basic=basic
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData