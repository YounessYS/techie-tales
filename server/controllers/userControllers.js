const registerUser = (req, res, next) => {
  res.json("Register user");
};

const loginUser = (req, res, next) => {
  res.json("Login user");
};

const getUser = (req, res, next) => {
  res.json("User Profile");
};

const changeAvatar = (req, res, next) => {
  res.json("Change user avatar");
};

const editUser = (req, res, next) => {
  res.json("Edit user details");
};

const getAllUsers = (req, res, next) => {
  res.json("Get all users");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAllUsers,
};
