import { check, validationResult } from "express-validator";

export default {
  rules() {
    return [
      check("name").not().isEmpty().withMessage("Name is required"),
      check("email", "Email is required").isEmail(),
      check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .isLength({ min: 3 }),
      check("password_confirmation").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password confirmation does not match password");
        }
        return true;
      }),
      check("gender")
        .isIn(["m", "f"])
        .withMessage("Gender must be male or female"),
      check("phone").not().isEmpty().withMessage("Phone is required"),
      check("country").not().isEmpty().withMessage("Country is required"),
      check("cpf").not().isEmpty().withMessage("CPF is required"),
      check("newsletter").isBoolean(),
    ];
  },

  validate(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
      errors: extractedErrors,
    });
  },
};
