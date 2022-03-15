const authorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try {
        const data = req.body

        if ( !Object.keys(data).length > 0)  return res.status(400).send({ error : "Please enter data"})
        const createdauthor = await authorModel.create(data)
        res.status(201).send({data : createdauthor})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.createAuthor = createAuthor