const express = require('express');
const router = express.Router();
const dateTime=require('node-datetime')
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const middleware=require("../middleWare/middleWare")

router.get("/test-me", function (req, res) {
    console.log("byyyyy")
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

router.get("/test",middleware.date)
router.get("/by",middleware.date)
router.get("/book",middleware.date)
// router.get('/try',function(req,res,next){

// })


//MOMENT JS
const moment = require('moment');

const req = require('express/lib/request');

router.get("/dateManipulations", function (req, res) {

    let date=dateTime.create()
    let current=date.format("y-m-d H-M-S")
    console.log(current)
    res.send({ msg: "all good"})
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    //const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)
    //var dateTime = new Date();
    // console.log(dateTime);
   
    // console.log(dateTime)

    
})

// router.get("/middle",middleware.a,UserController.basic)
// router.get("/time",function(req,res){
//     var myDate=Date()
//     res.send({msg:myDate})
// })

module.exports = router;