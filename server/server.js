const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const routes=require("./routes/router")
const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());



//Routes
app.use("/",routes)

//Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Connected to Database");
});

if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
