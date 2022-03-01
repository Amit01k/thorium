const BooksModel= require("../models/BooksModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BooksModel.create(data)
//     res.send({msg: savedData})
// }
const createBooks = async function (req, res) {
    var data = req.body
    let savedData = await BooksModel.create(data)
    res.send({ msg: savedData })
    
}

const getBooksData = async function (req, res) {
    let allBooks = await BooksModel.find()
    res.send({msg: allBooks})
}
const bookList = async function (req, res) {
    let allBooks = await BooksModel.find().select({ bookName:1, authorName:1})
    res.send({msg: allBooks})
}
const getBooksInYear = async function (req, res) {
    let BooksInYear = await BooksModel.find( { year: req.body.year } )
    res.send({msg: BooksInYear})
}
const getParticularBooks = async function (req, res) {
    let ParticularBooks = await BooksModel.find(req.body)
    res.send({ msg: ParticularBooks })
} 

const getXINRBooks = async function (req, res) {
    let allBooks = await BooksModel.find({ 'prices.indianPrice' : {$in: ["500 INR", "270 INR", "500 INR"] } } )
    res.send({msg: allBooks})
}
 const getRandomBooks  = async function (req, res) {
    let allBooks = await BooksModel.find({ $or: [ {stockAvailable: true} , { totalPages: {$gt: 500} }   ] } )
    res.send({msg: allBooks})
} 
module.exports.createBooks= createBooks
module.exports.getBooksData= getBooksData
module.exports.bookList= bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks