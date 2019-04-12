//require packages used in the project
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const getTrashTalk = require("./trash");
const port = 3000;

//require express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const carrer = req.body;
  const target = Object.values(carrer);
  const answer = getTrashTalk(target);
  console.log(carrer);
  console.log(target);
  res.render("index", { answer, carrer, target });
});

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
