const mongoose = require('mongoose');


const Noteschema = new Schema({
    name:{
        type:String,
        required:true
    },
        description:{
            type:String,
           
            required:true
    
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
  );
  module.exports=mongoose.model("notes",Noteschema);