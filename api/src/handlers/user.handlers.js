const {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/user.controller");

const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(5).required(),
  username: Joi.string().min(4).max(20).required(),
  email: Joi.string().email(),
});

const getAllUserHandler = (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = getUserByNameController(name);
      res.status(200).send(response);
    } else {
      const response = getAllUserController();
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
};

const getOneUserHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = getUserByIdController(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const createUserHandler = (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { name, username, email } = req.body;
    const response = createUserController(name, username, email);
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  try {
    const response = updateUserController(id, name, username, email);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = deleteUserController(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

module.exports = {
  getAllUserHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
