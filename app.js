const express = require("express");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileUpload");
const moment = require("moment");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://127.0.0.1/BlogSite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 5000;
const hostname = "127.0.0.1";

app.use(express.static("public"));
app.use(fileUpload());

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
      generateDate: (date, format) => {
        return moment(date).format(format);
      },
    },
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const main = require("./routes/main");
const posts = require("./routes/posts");
const admin = require("./routes/admin");
app.use("/", main);
app.use("/posts", posts);
app.use("/admin", admin);

app.listen(port, hostname, () => {
  console.log(`app listening http://${hostname}:${port}`);
});
