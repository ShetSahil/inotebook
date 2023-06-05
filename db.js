const mongoose =require('mongoose');
mongoose.set('strictQuery', false);

const mongoURI="mongodb://localhost:27017/inotebook?directConnection=true"
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL);

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connection successfull");
    })
}
module.exports= connectToMongo;