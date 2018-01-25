var fs = require('fs')
var express = require("express");
var indexRoutes = require("./routes/index");
var path = require("path")
var app=express();

app.set("view engine","html");
app.engine("html",function(path,options,callback){
    fs.readFile(path,'utf-8',callback);
    
})

app.use(express.static(path.join(__dirname,"../client")))

app.use('/',indexRoutes);

module.exports = app;