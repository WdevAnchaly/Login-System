const Ex=require("express");
const app=Ex();
const mongo=require("mongoose");
const dotenv=require("dotenv");

const port=process.env.PORT;

dotenv.config({path:'./config.env'});
require('./DB/conn');

// link router file 
// app.use(require('./router/auth'));

// const User=require('./model/userschema');
 
// meddleware 
const middleware=(req,res,next)=>{
    console.log("hello my middleware.");
    next;
}
middleware();

app.get('/',(req,res)=>{   
    res.send("hello! welcome to home page server page ");
});

app.get('/about',middleware,(req,res)=>{
    // console.log("hello my middleware.");
    res.send("hello! welcome to About page");
})

app.get('/contact',(req,res)=>{
    res.send("hello! welcome to contact page");
})

app.get('/signin',(req,res)=>{
    res.send("hello! welcome to sign in page");
})

app.get('/signup',(req,res)=>{
    res.send("hello! welcome to sign up page");
})

app.listen(port,()=>{
    console.log("Server is running on port no 3000")
})
