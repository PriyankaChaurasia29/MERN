const express=require('express')
const app=express();


// Middleware

const middleware = (req,res, next)=>{
    console.log("Hello my middleware");
}


app.get('/',(req,res)=>{
    res.send(`Hello from main section`);
})

app.get('/about', middleware, (req,res)=>{
    res.send(`Hello from about section`);
})

app.get('/contact',(req,res)=>{
    res.send(`Hello from contact section`);
})

app.get('/signup',(req,res)=>{
    res.send(`Hello from signup section`);
})
app.get('/signin',(req,res)=>{
    res.send(`Hello from signin section`);
})

app.listen(7000, ()=>{
    console.log(`Server is running at port no 7000`)
})