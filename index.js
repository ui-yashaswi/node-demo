const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.json());
app.get("/demo", (req, res) => {
  res.send("<h1>hello </h1>");
});

app.post("/post", (req, res) => {
  const { fname, lname } = req.body;
  console.log(`your name is ${fname} and surname is ${lname}`);

  res.send({
    fname: fname,
    lname: lname,
  });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
