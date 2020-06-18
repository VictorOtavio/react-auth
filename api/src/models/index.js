import mongoose from "mongoose";
import UserModel from "./UserModel";

mongoose.Promise = global.Promise;

const mongoURL = function() {
  let URL = "mongodb://";

  const USERNAME = process.env.DB_USERNAME || "root";
  const PASSWORD = process.env.DB_PASSWORD || "";

  if (PASSWORD !== "") {
    URL += `${USERNAME}:${PASSWORD}@`;
  }

  const HOST = process.env.DB_HOST || "localhost";
  const PORT = process.env.DB_PORT || "27017";
  const DATABASE = process.env.DB_DATABASE || "default";

  return `${URL}${HOST}:${PORT}/${DATABASE}`;
};

const db = {
  mongoose: mongoose,
  url: mongoURL(),
  users: UserModel(mongoose)
};

export default db;
