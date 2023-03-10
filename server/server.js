const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const routes=require("./routes/router")
const path = require('path');
const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());

//server config
app.use(express.static(path.join(__dirname, '../Client/build/')));

//Routes
app.use("/api",routes)
// for server
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});
//Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Connected to Database");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
