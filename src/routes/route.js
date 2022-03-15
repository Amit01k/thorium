const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")

router.get("/test-me", function (req, res) {
    res.send("welcome in our first project...............!")
})


router.post("/create", authorController.createAuthor)


router.post("/createBlog", blogController.create)


router.put("/update/:blogId" , blogController.updateBlog)


router.delete("/deleteByQuery", blogController.deleteByQuery)


router.delete("/blog/:blogId", blogController.deleteBlog)


router.get("/getBlogs" , blogController.getBlogs)


module.exports = router;