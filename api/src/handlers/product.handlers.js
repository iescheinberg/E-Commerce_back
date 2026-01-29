const {
  createProductController,
  getAllProductController,
} = require("../controllers/product.controller");


const getAllproductsHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    
  } else {
    const response = getAllProductController()
    res.send(response)
  };
};

const getOneProductHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Got product by id ${id}`);
};

const createProductHandler = (req, res) => {
  const { name, code, price } = req.body;
  const response = createProductController(name, code, price)
  res.send(response);
};

const updateProductHandler = (req, res) => {
  res.send("Updated product");
};

const deleteProductHandler = (req, res) => {
  res.send("Product deleted");
};

module.exports = {
  getAllproductsHandler,
  getOneProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
