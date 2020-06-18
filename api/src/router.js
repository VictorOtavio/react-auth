const express = require("express");
const router = express.Router();
const UserController = require("./controllers/UserController");
const UserRequest = require("./requests/UserRequest");

router.post(
  "/user",
  UserRequest.rules(),
  UserRequest.validate,
  UserController.store
);

module.exports = router;
