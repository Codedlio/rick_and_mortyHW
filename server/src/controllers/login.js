const users=require("../utils/users")
const express = require('express');

const login = (req,res) => {
   const {email, password}=req.query
   try{
   if (!password || !email) {
     res
      .status(500)
      .json({ message: "There isn't a password or email" })}
   if (users.email===email && users.password===password){
    res.status(200).json({access:true})
    
   }else{
   res.status(200).json({access:false})
    }
}
 catch (error) {
            res.status(404).send("error");

    }
};
 module.exports=login;