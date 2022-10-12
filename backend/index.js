import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb+srv://signodes:signodes@cluster0.uqpzzhl.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
},()=>{
  console.log("DB connected")
}
)

app.post("/register",(req,res)=>{
  console.log(req.body)
  const {firstName,lastName,email,phone,branch,sem,message}=req.body
  User.findOne({email:email},(err, user)=>{
     if(user){
        res.send({message:"User already registered"})
    } else{
       const user =new User({
         firstName,
         lastName,
         email,
         phone,
         branch,
         sem,
         message
        
       })
      user.save(err =>{
          if(err){
           res.send(err)
         }
         else{
          res.send({ message:"Successfully Registered"})
           
          }   

        })


     }

  })

})
 
  
  
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: String,
    phone : String,
    branch: String,
    sem: String,
    message:String,

})

const User =new mongoose.model("User", userSchema)




app.listen(27017,()=>{
  console.log("BE started at port 27017")
})