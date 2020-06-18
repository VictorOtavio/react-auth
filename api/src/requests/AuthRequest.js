import { check, validationResult } from "express-validator";

export default {
  rules() {
    return [
      check("email", "Email is required").isEmail(),
      check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
    ];
  },

  validate(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
      errors: extractedErrors
    });
  }
};
