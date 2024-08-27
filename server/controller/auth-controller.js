const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home section");
  } catch (error) {
    console.log(error);
  }
};

// const register = async (req,res) => {
//     try{

//         // res.status(200).json({ message: "Welcome to registration page"});
//         console.log(req.body)
//         res.status(200).json({ message: req.body});
//         console.log("Created")

//     }catch(error){
//         res.status(400).json("internal server error");
//     }
// }

const register = async (req, res) => {
    try {
      // Log the data from the request body
      console.log("Request Body:", req.body);
  
      // Send a response back to the client
      res.status(200).json({ message: "Welcome to the registration page" });
    } catch (error) {
      // Log any error that occurs
      console.error("Error occurred:", error);
  
      // Send an error response back to the client
      res.status(500).json({ message: "Internal server error" });
    }
  };
  



module.exports = { home, register };
