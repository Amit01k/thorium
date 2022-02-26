const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api! Amit Kumar")
})

router.post("/createBook", UserController.createBook  )

router.get("/getBookData", UserController.getBookData)

module.exports = router;