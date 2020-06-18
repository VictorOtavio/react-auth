import express from "express";
import AuthRequest from "./requests/AuthRequest";
import UserRequest from "./requests/UserRequest";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";

const router = express.Router();

router.post(
  "/auth",
  AuthRequest.rules(),
  AuthRequest.validate,
  AuthController.login
);

router.post(
  "/user",
  UserRequest.rules(),
  UserRequest.validate,
  UserController.store
);

module.exports = router;
