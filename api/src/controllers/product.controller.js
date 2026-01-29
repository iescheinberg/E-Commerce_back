const { products } = require("../db/database");

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

const getProductByNameController = (name) => {
  const productByName = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
  if (!productByName.length) {
    throw new Error("Producto no encontrado");
  }
  return productByName;
};

const getProductByIdController = (id) => {
  const productId = products.find((product) => product.id === Number(id));
  if (!productId) {
    throw new Error("Producto no encontrado");
  }
  return productId;
};

const updateProductController = (id, name, code, price) => {
  const updatedProduct = { name, code, price };
  const productId = products.find((product) => product.id === Number(id));
  if (productId) Object.assign(productId, updatedProduct);
  return updatedProduct;
};

const deleteProductController = (id) => {
  const productId = products.find((product) => product.id === Number(id));
  let deletedProduct;
  if (productId !== -1) {
    [deletedProduct] = products.splice(productId, 1);
  }
  return deletedProduct;
};

module.exports = {
  createProductController,
  getAllProductController,
  getProductByNameController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
};
