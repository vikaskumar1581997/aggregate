const mongoose=require("mongoose");
 const userSchema=new mongoose.Schema({
   
     name:String,
     dep:String,
     empid:String

 })
module.exports=mongoose.model("User",userSchema)