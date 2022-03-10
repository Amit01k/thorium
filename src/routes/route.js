const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const middleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.authorise, userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)//we can remove posts but complsary to remove after localhos:3000/userId/posts

router.put("/users/:userId",middleware.authorise, userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)

module.exports = router;