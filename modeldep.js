const mongoose=require("mongoose");

const depSchema=new mongoose.Schema({
    
name:String,
noOfEmp:Number,
noOfProjects:Number,

  

})

module.exports=mongoose.model("Dep",depSchema)