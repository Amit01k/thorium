let Obj=require('..loggerfolder/logger.js')


const express = require('express');
const router = express.Router();


router.get('/test-me', function (req, res) {
    obj.abc('thorium')
    obj.welcome();
    console.log(obj.url)
    res.send('My first ever api!')
});


module.exports = router;