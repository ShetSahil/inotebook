const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User') ;
const JWT_SECRET = "sahilisagoodb$y";
var jwt = require('jsonwebtoken');


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
    const salt = await bcryptjs.genSalt(10);
    const secpass = await bcryptjs.hash(req.body.password,salt);

    user = await User.create({
        name: req.body.name,
        password:secpass,
        email: req.body.email
    })
    // .then(user => res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error:'Please enter a unique value for email', message: err.message})})
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    res.json(authtoken)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})


//authenticating the user

router.post('/login',[

    body('email', 'Enter you valid email').isEmail(),
    body('password', 'Password must be minimum 5 characters long').exists(),

],async(req,res)=>{
    //if errors,return bad errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Enter Valid Credentials"})
        }
        const passwordCompare = await  bcryptjs.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Enter Valid Credentials"})
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.json(authtoken)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal errorr");
        }
})
module.exports= router
