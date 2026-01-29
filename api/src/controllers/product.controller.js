const {products} = require("../db/database");


const createProductController = (name, code, price) => {
  const id = products.length + 1;
  const newProduct = { id, name, code, price };
  if (!name || !code || !price) {
    throw new Error("Faltan datos de producto");
  }
  products.push(newProduct);
  return newProduct;
};

const getAllProductController = () => {
  return products;
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
  createProductController,
  getAllProductController,
};
