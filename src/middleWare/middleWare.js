const address = require('address') //address module=>for the ip address without address module this show only(::1)
const dateTime=require('node-datetime')//this node-datetime module for the date and time
//const ip=require('address')
const express=require('express')


const date=function(req,res,next){
    let date=dateTime.create()

    let current=date.format("y-m-d H:M:S")

    let add=address.ip()

    console.log(current+" "+","+add+" "+req.originalUrl)

    // console.log(req. socket. remoteAddress);
    next()
    res.send("please see your terminal")

}
//const ip=function(req,res,next){
    // app. get("/", function (req, res) {
        //console. log(req. socket. remoteAddress);
        //console. log(req. ip);
        //next()
        
        //res. send("your IP is: " + req. ip);
        // });
    
    
//}



module.exports.date=date
//module.exports.ip=ip