import express from "express";
import bodyParser from "body-parser";
import mainroutes from "./routes/router.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", mainroutes);

app.listen(8080, async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/EcoCT");
    console.log("App is working on 8080");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
