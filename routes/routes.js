console.log("routes");

var action=require("../action/action.js");

var UIRoutes=function(app){
    this.app=app;
    this.actionInstance=new action(app);
};

module.exports=UIRoutes;

UIRoutes.prototype.init=function(){

  var self=this;
  var app=this.app;


 app.get('/insert',function(req,res){

  console.log("insert is clicked");
 	var request=req.query;

    console.log("insert request",request);
 	self.actionInstance.insert(request,function(error,response){

    self.actionInstance.find(request,function(error,response){

           res.render('index.ejs');
        });

      });

 	});


 app.get('/find',function(req,res){

    console.log("find employee database is clicked");

  var request=req.query;

  self.actionInstance.find(request,function(error,response){
    console.log("find all data",response);
   res.render("Empdetails.ejs",{userdata: response});
  })
  

 });



 app.post('/findsingleuser',function(req,res){

    console.log("find single user is clicked");

  var request=req.body;

    console.log("request for findsingleuser",request);
  self.actionInstance.findSingleUser(request,function(error,response){
    console.log("response",response);
   res.render("index.ejs",{userdata:response});
  });
  

 });

  app.get('/deletesingleuser',function(req,res){

    console.log("delete is clicked");

  var request=req.query;

    console.log("request for delete",request);
  self.actionInstance.deleteUser(request,function(error,response){

   res.render("delete.ejs");
  });
   });

  app.get('/updateuser',function(req,res){

    console.log("updateuser is clicked");

  var request=req.query;

    console.log("request for update",request);
  self.actionInstance.updateuser(request,function(error,response){

   res.render("update.ejs",{result:response});
  });
   });

  app.get('/update',function(req,res){

  console.log("update is clicked");

  var request=req.query;

    console.log("request for update",request.name);
  self.actionInstance.update(request,function(error,response){

   res.render("updatedata.ejs",{userdata:response});
  });
   });
  


};