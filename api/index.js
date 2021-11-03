import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/Route.js";
const app = express();

const URL = "mongodb://localhost:27017/whatsappClone";

//middlewares
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

const PORT = 4500;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
