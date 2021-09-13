const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 5000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);

app.listen(port, hostname, () => {
  console.log(`app listening http://${hostname}:${port}`);
});
