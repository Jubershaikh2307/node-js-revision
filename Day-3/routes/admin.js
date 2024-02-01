const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ welcome: "admin" });
});

router.use("/add-product", (req, res, next) => {
  console.log("THIS IS ADDING THE FILES ROUTE");
});

module.exports = router;
