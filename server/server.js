const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000;

app.listen(5000, () => {
    console.log("Server is running");
})

app.get('/', (req, res) => {
    res.json({msg: "Getting"})
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/user', require('./routes/userRouter'));


//connect mongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB connected")
}).catch(err=>{
    console.log(err)
})