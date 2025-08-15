const express = require("express");
const User = require("../models/User")
const router = express.Router();
const {body, validationResult } = require('express-validator');
  

router.post("/" ,[
    body('email').isEmail(),
    body('name').isLength({min:3}),
    body('password').isLength({min:5})
],(req,res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({result:result.array()});
  }
   User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user)).catch(err => {console.log(err)
        res.json({error:"please enter a unique email",message:err.message});
    })
})


module.exports = router