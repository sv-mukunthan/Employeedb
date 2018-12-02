var express = require("express");
var app     = express();

var bodyParser=require('body-parser');
var urlencodedparser=app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');


var port=5000; 
var server=app.listen(port,function(){
          console.log('Listening on port %d',port);
});

 var path = __dirname + '/views/';
 console.log("app path",path);
  app.get('/',function(req,res){

      res.render(path+'index');

  });



var WebRoutes = require("F:/Employeedb/routes/routes.js");
var webRoutes = new WebRoutes(app);
webRoutes.init();
