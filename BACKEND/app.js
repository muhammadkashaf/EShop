const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

require("dotenv/config");

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: "dev",
    image: "some_url",
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const newProducts = req.body;
  console.log(newProducts);
  res.send(newProducts);
});



mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
  })



app.listen(3000, () => {
  console.log(api);
  console.log("server is running");
});
