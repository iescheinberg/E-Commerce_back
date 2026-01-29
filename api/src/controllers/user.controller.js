const { users } = require("../db/database");

const createUserController = (name, username, email) => {
  const id = users.length + 1;
  const newUser = { id, name, username, email };
  if (!name || !username || !email) {
    throw new Error("Faltan datos");
  }
  users.push(newUser);
  return newUser;
};

const getAllUserController = () => {
  return users;
};

const getUserByNameController = (name) => {
  const userByName = users.filter(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );
  if (!userByName.length) {
    throw new Error("Usuario no encontrado");
  }
  return userByName;
};

const getUserByIdController = (id) => {
  const userId = users.find((user) => user.id === Number(id));
  if (!userId) {
    throw new Error("Usuario no encontrado");
  }
  return userId;
};

const updateUserController = (id, name, username, email) => {
  const updatedUser = { name, username, email };
  const userId = users.find((user) => user.id === Number(id));
  if (userId) Object.assign(userId, updatedUser);
  return updatedUser;
};

const deleteUserController = (id) => {
  const userId = users.findIndex((user) => user.id === Number(id));
  let deletedUser;
  if (userId !== -1) {
    [deletedUser] = users.splice(userId, 1);
  }
  return deletedUser;
};

module.exports = {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
