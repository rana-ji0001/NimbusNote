const express = require("express");
const User = require("../models/User")
const router = express.Router();
const {body, validationResult } = require('express-validator');
  
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
   user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    // show the created user in json format 
    res.json(user)
    } catch (error) {
        // when some error occured in my code (no one knows what can happen)
        console.log(error.message);
        res.status(500).send("some error occured");
  }
})


module.exports = router