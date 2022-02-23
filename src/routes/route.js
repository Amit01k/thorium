const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const arrMovie=["hulk","iron-man","spider-man","doctor-strang"]

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// 1.this api will fetch the array of movie.
router.get('/moviefull',function(req,res){
    res.send(arrMovie)
})
 // 2.this api will fetch the indexvalue number data(0=hulk,1=iron-man)this give output
 router.get('/movie/:movieIndex',function(req,res){
     const arrMovie=["hulk","iron-man","spider-man","doctor-strang"]
     let value=req.params.movieIndex;
     res.send(arrMovie[value])
 })
 // 3.this api return the index number value if we give wrong if this put wrong id this show eror
 router.get('/movie1/:movieId',function(req,res){
    const arrMovie1=["hulk","iron","spidy","doctor-strang"]
    let value1=req.params.movieId;
    if(value1>arrMovie1.length){
        res.send("error! please enter valid id")

    }
    else{
        res.send(arrMovie1[value1])
    }
    
})

//4. this api is return the value with key nad value pairs
router.get('/films',function(req,res){
    let filmArr=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name":"Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name":"Finding Demo"
       }]
    

       res.send(filmArr)
       
})

//5.
router.get('/films2/:filmId',function(req,res){
    let filmArr2=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name":"Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name":"Finding Demo"
       }]
    let fivalue=req.params.filmId
    if(fivalue>filmArr2.length){
        res.send("this value is not presnt.....!")
    }
    else{
        res.send(filmArr2[fivalue])
    }

       
       
})





module.exports = router;
