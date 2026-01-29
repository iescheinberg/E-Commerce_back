const {
  createProductController,
  getAllProductController,
  getProductByNameController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} = require("../controllers/product.controller");

const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
  code: Joi.string().min(7).max(10),
  price: Joi.number(),
});

const getAllproductsHandler = (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = getProductByNameController(name);
      res.send(response);
    } else {
      const response = getAllProductController();
      res.send(response);
    }
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const getOneProductHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = getProductByIdController(id);
    res.send(response);
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
};

const createProductHandler = (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { name, code, price } = req.body;
    const response = createProductController(name, code, price);
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const updateProductHandler = (req, res) => {
  const { id } = req.params;
  try {
    const { name, code, price } = req.body;
    const response = updateProductController(id, name, code, price);
    res.send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const deleteProductHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = deleteProductController(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

module.exports = {
  getAllproductsHandler,
  getOneProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
