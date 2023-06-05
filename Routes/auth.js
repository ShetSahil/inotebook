const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const User = require('../models/User')
const User = require('../models/User') ;

router.post('/',[
    body('name', 'Enter you valid name').isLength({min:3}),
    body('email', 'Enter you valid email').isEmail(),
    body('password', 'Password must be minimum 5 characters long').isLength({min:5}),

],(req,res)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name: req.body.name,
        password:req.body.password,
        email: req.body.email
    }).then(user => res.json(user))
    .catch(err=>{console.log(err)
    res.json({error:'Please enter a unique value for email', message: err.message})})
    

})
module.exports= router
