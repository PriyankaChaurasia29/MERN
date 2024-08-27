const express = require('express');
const app = express();
const connectDB = require("./utils/db");
app.use(express.json());
const router = require("./router/auth-router");

app.use("/api/auth", router);


//  Middleware

//const middleware = (req,res, next)=>{
//  console.log("Hello my middleware");
//}

//app.get('/',(req,res)=>{
//    res.status(200).send(`Hello from main section`);
//})

//app.get('/register',(req,res)=>{
//   res.status(200).send(`Hello from registration section`);
//})

connectDB().then(()=>{
app.listen(7000, () => {
  console.log(`Server is running at port no 7000`);
});
});