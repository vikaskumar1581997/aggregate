const express= require ("express");
const app=express();
const mongoose=require("mongoose");
const userModel=require("./model.js");
const depModel=require("./modeldep")
const bodyParser=require("body-parser");
const cors=require("cors");


app.use(cors('*'))


app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log("Middleware called")
    next();
});

// mongoose.connect("mongodb://localhost:27017/vik",{useNewUrlParser:true, useUnifiedTopology:true})
// .then(()=>console.log("mongo connected"))
// .catch((err)=>console/log(err))

mongoose
  .connect("mongodb://localhost:27017/vik", { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => console.log(err));


// const userSchema=new mongoose.Schema({
   
//     name:String,
//     dep:String,
//     empid:String

// })
// mongoose.model("User",userSchema)

app.get("/insertuser", async(req,res)=>{
    userModel.insertMany([{
        name: "rakesh",
        dep: "it",
        empid: "tyc99"
    }, {
        name: "rajesh",
        dep: "cs",
        empid: "tyc96"
    }])
    res.send("hiiii")
})

app.post("/dep",(req,res)=>{
    data=req.body;
    console.log(data,"data")
    const saved=depModel.create(data)

    res.send(saved);

})

app.get("/data",async(req,res)=>{
  
    try{
        console.log("in data")
       let result=await userModel.aggregate([{$match:{name:"vikas"}},{$group:{_id:"$dep",count:{$sum:1}}}])

     //const result =await userModel.aggregate([{ $group: { _id: "$dep", count: { $sum: 1 } } }])

    // const result= await depModel.aggregate([{$group:{_id:"$name",average:{$avg:"$noOfProjects"},count:{$sum:1}}}])

    //why we write await here????????????????????????=> earlier on line k65 i was not using await thats why it was required 
    //to use await in for loop as it will for result. 
    let res1=[]
       for  (i of result) {
        console.log(i)
        res1.push(i)
        
    }
    
    res.send(res1)
      //why this res is not working why it is givig code only?????????????????? 
        //res.send(result)
    } catch{

    }

})

app.get("/lookup",async (req,res)=>{
   

let result= await depModel.aggregate([
    {$lookup:
    {
        from:"users",
        localField:"name",
        foreignField:"dep",
        as:"employees"
    }},
    {

        //==addfields vs prjoects====in projects need to specify which all fields to be displayed=
        $addFields:{           
            
            employees:{
                $filter:{   
                    input:"$employees",
                    as:"employees",
                    cond:{
                        $eq:["$$employees.name","vikas"]
                    }
                }

            }
        }
    },
    {
        $unwind:{
            path:"$employees"
        }
    }
])

// let res1=[]
// for  (i of result) {
//  console.log(i)
//  res1.push(i)
 
// }
console.log(result)
res.send(result)

})
app.get("/hii", async(req,res,next)=>{
    res.json(req.query.named )
})

app.listen(3080,()=>{
    console.log("hiiii BACK")
});


userModel.aggregate([
  
    {$group:{_id:"$dep", average:{$avg:{$sum:["$amount", "$price"]}}}}

])