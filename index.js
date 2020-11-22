const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

/* Initialize */
const app = express();
app.use(cors());
app.use(formidable());

/* Routes */
const characterRoutes = require("./routes/character");
app.use(characterRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: { message: "Page not found" } });
});

/* Start server */
app.listen(process.env.PORT, () => {
  console.log("Server started on port : " + process.env.PORT);
});
