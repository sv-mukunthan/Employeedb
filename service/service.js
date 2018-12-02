console.log("service");

var service=function(app) {
this.app=app;
};


module.exports=service;

var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost/27017';

service.prototype.insert=function(reqobj,callback){
     
  var userrequest=reqobj;
	console.log("req object from client insert method",userrequest);
    
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection('employeedb').insertOne(userrequest,function(err,res) {
        if (err) throw err;
        
         db.close();
        callback(err,res)
        
      });
    });
};

service.prototype.find=function(reqobj,callback){
     
  var userrequest=reqobj;  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("employeedb").find({}).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        callback(err,result);
      });
    });
};


service.prototype.findOne=function(reqobj,callback){
     
  var userrequest=reqobj;
  console.log("req object from client find method",userrequest);
    console.log("find userrequest.id:",userrequest.id);    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("employeedb").find({id:userrequest.id},{ projection: { _id: 0, name: 1,id:1,age:1,salary:1,phone:1} }).toArray(function(err, result) {
        if (err) throw err;       
        db.close();
        console.log("result",result);
        callback(err,result);
      });
    });
  };

  service.prototype.finduser=function(reqobj,callback){
     
  var userrequest=reqobj;
  console.log("req object from client find method",userrequest);
    console.log("find userrequest.id:",userrequest.id);    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("employeedb").find({name:userrequest.name},{ projection: { _id: 0, name: 1,id:1,age:1,salary:1,phone:1} }).toArray(function(err, result) {
        if (err) throw err;       
        db.close();
        console.log("result",result);
        callback(err,result);
      });
    });
  };

  service.prototype.delete=function(reqobj,callback){
     
  var userrequest=reqobj;
  console.log("req object from client delete method",userrequest);
    console.log("find userrequest.username:",userrequest.id);    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("employeedb").deleteMany({id:userrequest.id},function(err, result) {
        if (err) throw err;
        db.close();
        callback(err,result);
      });
    });
};

service.prototype.update=function(reqobj,callback){
 var userrequest=reqobj;    
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = {name:userrequest.name};
  var newvalues = { $set: {id:userrequest.id,salary:userrequest.salary,age:userrequest.age,phone:userrequest.phone } };
  dbo.collection("employeedb").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
    callback(err,res);
  });
});
};

