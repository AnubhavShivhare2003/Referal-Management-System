const express=require('express');
const connectDb=require("./config/db")
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const candidateRoutes = require('./routes/candidate.routes');


const app=express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/candidates', candidateRoutes);


const PORT=process.env.PORT
app.listen(PORT,()=>{
    connectDb()
    console.log(`Server has started on PORT:${PORT}`);
})