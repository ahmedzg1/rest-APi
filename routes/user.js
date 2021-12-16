const express =require("express");
const userRouter = express.Router();
const User=require("../model/User");
userRouter.post("/add",async(req,res)=>{
    try {
        const newUser=new User(req.body);
        let result=await newUser.save()
        res.send({user : result,msg: "added"})
    } catch (error) {
        console.log(error)
    }
})
//get all users
userRouter.get("/",async(req,res)=>{
    try {
        let result=await User.find()
    res.send({users: result, msg:"all users"});
    } catch (error) {
        
    }
})





module.exports= userRouter;