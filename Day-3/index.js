// What is Express.js
// Express.js, or simply Express, is a back end web application framework for building RESTful
// APIs with Node.js

// Alternative Express
// Vanilla Node.js
// Adonis.js
// KOA
// Sails.js
// ... and mny more

const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  console.log("Create a server");
});

app.listen(PORT, () => {
  console.log("This iss t");
});
