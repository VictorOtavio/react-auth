const UserController = {
  store(req, res) {
    res.status(201).json(req.body);
  },
};

export default UserController;
