const UserModel = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      password: String,
      gender: String,
      phone: String,
      country: String,
      cpf: String,
      newsletter: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    // Não adiciona a hash da senha ao JSON
    delete object.password;

    return object;
  });

  const User = mongoose.model("user", schema);

  return User;
};

export default UserModel;
