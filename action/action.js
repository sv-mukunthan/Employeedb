console.log("action");

var service=require("../service/service.js");

var action=function(app) {
   this.app=app;
   this.apiserviceInstance=new service(app);
};

module.exports=action;

action.prototype.insert=function(request,callback){

    var reqobj=request;
    
    console.log('insert request object',reqobj);
     
    // alert("insert.ejs called");
    var self=this;
   
    self.apiserviceInstance.insert(reqobj,function(error,response){

	    callback(error,response);

    });
};

action.prototype.find=function(request,callback){

    var reqobj=request;

    var self=this;
   
    self.apiserviceInstance.find(reqobj,function(error,response){
      
        callback(error,response);

    });
};
action.prototype.findSingleUser=function(request,callback){

    var reqobj=request;
    
    console.log('findsingleuser request object',reqobj);
     

    var self=this;
   
    self.apiserviceInstance.findOne(reqobj,function(error,response){
      
      console.log("response in action",response);

        callback(error,response);

    });
};

action.prototype.deleteUser=function(request,callback){

    var reqobj=request;
    
    console.log('deleteuser request object',reqobj);
     

    var self=this;
   
    self.apiserviceInstance.delete(reqobj,function(error,response){
      
    

        callback(error,response);

    });
};

action.prototype.updateuser=function(request,callback){

    var reqobj=request;
    
    console.log('updateuser request object',reqobj);
     

    var self=this;
   
    self.apiserviceInstance.finduser(reqobj,function(error,response){
      
    

        callback(error,response);

    });
};

action.prototype.update=function(request,callback){

    var reqobj=request;
    
    console.log('update request object',reqobj);
     

    var self=this;
   
    self.apiserviceInstance.update(reqobj,function(error,response){
      
    

        callback(error,response);

    });
};
