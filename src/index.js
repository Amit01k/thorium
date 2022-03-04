const express = require('express');
const dateTime=require('node-datetime') //this is for the address and time
const ipAddress=require('address')//this is for the ip address 
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const req = require('express/lib/request');
const { application } = require('express');
const DateTime = require('node-datetime/src/datetime');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
// here is global middle ware
const globalmiddleware=function(req,res,next){
    let date=dateTime.create()
    let current=date.format("y-m-d H:M:S")

    let ipAdd=ipAddress.ip()

    console.log(current+" , "+ipAdd+" , "+req.originalUrl)
    next()
    

}
app.use(globalmiddleware)
app.get("/home",function(req,res){
    res.send("welcome Amit")
})
app.get("/address",function(req,res){
    res.send("address required")
})
app.get("/about",function(req,res){
    res.send("this is about page")
})







app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
