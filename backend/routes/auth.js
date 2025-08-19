const express = require("express");
const User = require("../models/User")
const router = express.Router();
const {body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "ranaBad$boy";
  
//create user using post req :: no login required res= api/auth/createuser
router.post("/createuser" ,[
    body('email','enter a valid email').isEmail(),
    body('name','enter a valid name').isLength({min:3}),
    body('password','password must be atleast of three characters').isLength({min:5})
],async (req,res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({result:result.array()});
  }
  //if user with this email already exits then give a error message 
  try {
  let user = await User.findOne({email: req.body.email});
  if(user){
    res.status(400).json({error:"sorry a user with this email already exits"});
  }
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password,salt);
   user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    })
    // show the created user in json format 
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    // console.log(jwtData);
    res.json({authtoken});
    } catch (error) {
        // when some error occured in my code (no one knows what can happen)
        console.log(error.message);
        res.status(500).send("Itnernal server error");
  }
    

})

//Authenticate a  user using post req :: no login required res= api/auth/login
    router.post("/login" ,[
    body('email','enter a valid email').isEmail(),
    body('password','password can not be blank').exists(),

    ],async (req,res) => {
      const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({result:result.array()});
    }
    const {email,password} = req.body;
      try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please try to login with correct cradential"});
      }
      const passwordCompare = await bcrypt.compare(password,user.password);
      if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with correct cradential"});
      }
      const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    // console.log(jwtData);
    res.json({authtoken});
    } catch(error){
      console.log(error.message);
      res.status(500).send("Itnernal server error");
    }
    });


    ////Get loggedIn user detail using post req :: no login required res= api/auth/login
    router.post("/getuser" ,fetchuser,async (req,res) => {
      try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
        
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Itnernal server error");
      }

    });



module.exports = router