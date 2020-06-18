import cors from "cors";
import logger from "morgan";
import express from "express";
import bodyParser from "body-parser";
import router from "./router";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ exposedHeaders: "*" }));

app.use("/", router);

export default app;
