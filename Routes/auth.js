const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require('../models/User') ;

router.post('/createuser',[
    body('name', 'Enter you valid name').isLength({min:3}),
    body('email', 'Enter you valid email').isEmail(),
    body('password', 'Password must be minimum 5 characters long').isLength({min:5}),

],async(req,res)=>{
    //if errors,return bad errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    //check whether user with same email exists
    try {
        
    
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"sorry user with this email exists"})

    }
    user = await User.create({
        name: req.body.name,
        password:req.body.password,
        email: req.body.email
    })
    // .then(user => res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error:'Please enter a unique value for email', message: err.message})})
    res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})
module.exports= router
