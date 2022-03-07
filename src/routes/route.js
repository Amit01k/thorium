const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const ProductController=require("../controllers/productController")
const orderConTroller=require("../controllers/orderController")




const commonMw = require("../middleware/milleware")


router.post("/createUser", commonMw.mid1, UserController.createUser  )

router.post("/createProduct", ProductController.productCreate)

router.post("/createOrder", commonMw.mid1,orderConTroller.createOrder )






















//here we are making middleware 

// const midw=async function(req,res,next){
//     if()
// }




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)

router.post("/deleteBooks", BookController.deleteBooks)

// router.post("/createProduct",ProductController.productCreate)

// router.get("/getProductData",ProductController.productFind)

// router.post("/order",orderConTroller.createOrder)



//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;