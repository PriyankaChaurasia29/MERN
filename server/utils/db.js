const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URI)

const URI = "mongodb://gofood:priyanka@12@ac-pglx0qa-shard-00-00.f14obvf.mongodb.net:27017,ac-pglx0qa-shard-00-01.f14obvf.mongodb.net:27017,ac-pglx0qa-shard-00-02.f14obvf.mongodb.net:27017/mern_admin?ssl=true&replicaSet=atlas-108axg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () =>{
    try{
        await mongoose.connect(URI);
        console.log('connection successful');
    }catch (error){
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDB;