const { Router } = require("express");
const {
  getAllUserHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,

} = require('../handlers/user.handlers')

const userRoutes = Router();

// Rutas Users
userRoutes.get("/",getAllUserHandler);

userRoutes.get("/:id", getOneUserHandler);

userRoutes.post("/", createUserHandler);

userRoutes.put("/:id", updateUserHandler);

userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
