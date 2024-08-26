const home = async (req,res) => {
    try{
        res.status(200).send("Welcome to home section");
    }catch(error){
        console.log(error);
    }
}

const register = async (req,res) => {
    try{
        console.log(req.body);
        res.status(200).json({ message: "Welcome to registration page"});
    }catch(error){
        res.status(400).json("internal server error");
    }
}

module.exports = { home, register};