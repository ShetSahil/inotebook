var jwt = require('jsonwebtoken');
const JWT_SECRET = "sahilisagoodb$y";

const fetchuser=(req,res,next)=>{
    //get user from jwt token
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please enter valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please enter valid token"});
       
    }
   
}
module.exports = fetchuser;