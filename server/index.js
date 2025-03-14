require('dotenv').config();
const express=require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const mongoose=require('mongoose');

const checkCookie=require('./utils/cookieAuthMiddleware');
const register=require('./routes/registerRoute');
const login=require('./routes/loginRoute');

const app=express();

app.use(express.json());
app.use(cookieParser());

// app.use(session({
//     secret : process.env.SECRET_SESSION,
//     resave : false,
//     saveUninitialized : false,
//     rolling:true, //expires after 2 hours of inactivity
//     cookie:{secure:false , sameSite:'lax',maxAge:7200000}
// }))



 app.get('/',checkCookie,(req,res)=>{
    res.send("Please log in.Redirecting to login/register page")
 });

app.use('/v1',register);
app.use('/v1',login);

mongoose.connect(process.env.MONGO)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("Connected to mongodb");
})
.catch((err)=>{
    console.log(err);
});



