var express = require("express");
// var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var productCtrl = require('./controllers/productCtrl');
var keys = require('./secretkeys.js');
var cors = require('cors');
var massive = require('massive');
var port = 3000;

var app = module.exports = express();

var massiveServer = massive.connectSync({
   connectionString: "postgres://postgres:"+ keys.serverSecret +"@localhost/Threadless"
});


app.use(bodyParser.json());
app.use(express.static('../dist'));
app.set('db', massiveServer);

var db = app.get('db');

app.get("/api/products", function(req,res) {
   db.get_all_products(function(err, products) {
      res.send(products);
      console.log("request made");
   });
});


app.listen(port, function(){
  console.log("Ship docked at port: ", port);
});
