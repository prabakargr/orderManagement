var express=require('express');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var jwt = require('jsonwebtoken');

var morgan = require('morgan');

var cors=require('cors')

// var db=mongoose.connect("mongodb://117.239.111.244:27017/Tara")


var app=express();

var path = require("path")



app.use(function (req, res, next) {
    res.setHeader('X-Powered-By', 'IITM')
    next()
  })

process.env.PWD = process.cwd();

//html view
// app.use('/AR',express.static(path.resolve(__dirname, 'ionic')));
// app.use('/dashboard',express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, authorization,Accept,x-access-token");
    next();
});





var port=process.env.PORT || (5000);

app.listen(port, () => console.log(`Running on localhost:5000`));
