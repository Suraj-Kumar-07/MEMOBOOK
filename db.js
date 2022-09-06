const mongoose=require("mongoose");


// const mongoURI="mongodb://localhost:27017/memobook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI="mongodb+srv://suraj_2024:20140257086@cluster0.qa1qciq.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;