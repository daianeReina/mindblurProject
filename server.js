const express = require("express");

const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT} 👏👏👏`);
});
