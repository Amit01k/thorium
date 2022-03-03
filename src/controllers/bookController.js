const { count } = require("console")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisher")
const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    const { author, publisher, } = req.body
    if (!author) {
        res.send({ msg: "author is required" })
        return
    }
    if (!publisher) {
        res.send({ msg: " publisher is required" })
        return
    }
    const findAuthor = await authorModel.findOne({ _id: author })
    if (!findAuthor) {
        res.send({ msg: "invalid author" })
        return
    }
    const findpublisher = await publisherModel.findOne({ _id: publisher })
    if (!findpublisher) {
        res.send({ msg: "invalid publisher" })
        return

    }

    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })

}


const updateBookData = async function (req, res) {
  let publisherId= await publisherModel.find({publisherName:{$in:["HarperCollins", "Penguin"]}}).select({_id:1})

  let arr=[]
  arr=publisherId.map(x => x._id)

  let data= await bookModel.updateMany(
    {publisher:{$in:arr}},
    {$set: {isHardCover:true} },
    { new:true })  
  res.send(data)

}


const updateBookByRating = async function (req, res) {
    let publisherId = await publisherModel.find({ publisherName: { $in: ["HarperCollins", "Penguin"] } }).select({ _id: 1 })

    let arr = []
    
    arr = publisherId.map(x => x._id)

    let data = await bookModel.find({ publisher: { $in: arr } }).updateMany(
        { ratings: { $gt: 3.5 } },
        { $inc: { price: + 10 } },
        { new: true })
    res.send(data)

}
module.exports.updateBookData=updateBookData
module.exports.updateBookByRating =updateBookByRating
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
