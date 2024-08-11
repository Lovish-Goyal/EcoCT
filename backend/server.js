import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, async function () {
  console.log("Server is on 8080");
});
