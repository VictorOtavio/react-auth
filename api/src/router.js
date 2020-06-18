import express from "express";
import UserRequest from "./requests/UserRequest";
import UserController from "./controllers/UserController";

const router = express.Router();

router.post(
  "/user",
  UserRequest.rules(),
  UserRequest.validate,
  UserController.store
);

module.exports = router;
