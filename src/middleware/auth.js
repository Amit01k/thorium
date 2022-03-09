const jwt = require("jsonwebtoken");


const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token=req.headers["x-auth-token"]
    if(token==undefined){
        console.log("done")
    

    next()
    }
    else{
        console.log("requst is missing madatory header")
    }
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

    let userModify=req.params.userId
    let userLogger=decodedToken.userId
    if(userModify!=userLogger)
    return res.send({status:false,msg:"user not authorized"})



    // let xauth=req.headers["x-auth-token"]
    // if(!xauth) return res.send("token must be required")
    
    // let decode=jwt.verify(token,"functionup-thorium")
    // if(!decode) return res.send("usertoken is invalid")

    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise