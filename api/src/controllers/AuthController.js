import bcrypt from "bcrypt";
import db from "../models";
const User = db.users;

// Verifica as credenciais e faz login do usuário no sistema
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (
      user === null ||
      !bcrypt.compareSync(req.body.password, user.password)
    ) {
      res.status(401).json({ message: "Invalid email or password." });
    }
    res.json({ message: "User authenticated successfully!" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating the user."
    });
  }
};

export default {
  login
};
