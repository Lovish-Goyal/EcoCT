import express from "express";
import bodyParser from "body-parser";
import mainroutes from "./routes/router.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: FRONTEND_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", mainroutes);
app.use("/uploads", express.static("uploads"));

app.listen(8081, async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("App is working on 8081");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});