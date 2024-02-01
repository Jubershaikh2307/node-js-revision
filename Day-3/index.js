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
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send({ welcome: "abcd" });
});

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.listen(PORT);
