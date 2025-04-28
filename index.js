const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())
const port = process.env.PORT || 4000

// Create Host 
app.listen(port, () => {
  console.log("Listening to the host");
});


// Create Endpoint
app.get("/jumia", (req, res)=> {
res.status(200).json({
    message: "Welcome to Jumia"
})
})


