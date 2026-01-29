const { Router } = require('express')
const userRoutes = require('./user.routes')
const productRoutes = require('./product.routes')

// Main route
const mainRoute = Router()

// User routes
mainRoute.use("/api/users", userRoutes)

// Product routes
mainRoute.use("/api/products", productRoutes)



mainRoute.get("/api", (req, res) => {
  res.send("Hello World");
});





module.exports = mainRoute