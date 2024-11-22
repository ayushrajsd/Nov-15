const UserModel = require("../models/users");

const createUser = async (req, res) => {
  const { name, email } = req.body;
  console.log("creating user");

  try {
    const user = await UserModel.create({
      name,
      email,
    });
    console.log("called the create method");
    return res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Error in creating user", err: err.message });
  }
};

module.exports = { createUser };
