import db from "../models";
const User = db.users;

// Adiciona e salva um novo usuário
const store = async (req, res) => {
  // Cria um usuário
  const user = new User({ ...req.body });

  // Salva o usuário no banco de dados
  try {
    const result = await user.save(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating the user.",
    });
  }
};

export default {
  store,
};
