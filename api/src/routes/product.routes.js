const { Router } = require("express");

const {
  getAllproductsHandler,
  getOneProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} = require("../handlers/product.handlers");

const productRoutes = Router();

// Products
productRoutes.get("/", getAllproductsHandler);

productRoutes.get("/:id", getOneProductHandler);

productRoutes.post("/", createProductHandler);

productRoutes.put("/:id", updateProductHandler);

productRoutes.delete("/:id", deleteProductHandler);

module.exports = productRoutes;
