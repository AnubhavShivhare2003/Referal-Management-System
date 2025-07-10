const mongoose=require("mongoose");

const connectDb=async()=>{
    try {
        const MONGO_URL=process.env.MONGO_URL
        await mongoose.connect(MONGO_URL);
        console.log("Connected to Db");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectDb