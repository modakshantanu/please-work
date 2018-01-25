var path = require("path")
var router = require('express').Router();



router.get('/',function(req,res){
    
    res.send(path.join(__dirname,"../../client/index.html"));
});

module.exports= router;