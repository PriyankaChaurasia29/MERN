const express = require("express");
const router = express.Router();
const {home, register} = require("../controller/auth-controller");


router.route("/").get(home);


// we can also get data in this way
//router.route("/").get((req,res)=>{
//    res.status(200)
//    res.send(`Hello from main router section`);
//});

//router.route("/register").get((req,res)=>{
//   res.status(200)
//   res.send(`Hello from registration page`);
//});

router.route("/register").post(register);



module.exports = router;