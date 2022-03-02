const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newAuthor", authorController.createAuthor  )

router.get("/getNewAuthor", authorController.getAuthorsData)

router.post("/newBook", bookController.createBook  )

router.get("/getnewBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/newPublisher",publisherController.publisherData)
router.get("/getPublisherData",publisherController.getDataPublisher)

module.exports = router;