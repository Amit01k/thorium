const productModel = require("../models/product")

const productCreate = async function (req, res) {
    let input = req.body
    let data = await productModel.create(input)
    res.send(data)

}


let productFind = async function (req, res) {
    let all = await productModel.find()
    res.send(all)
}
module.exports.productCreate = productCreate
module.exports.productFind = productFind