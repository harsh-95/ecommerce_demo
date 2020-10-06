const Product = require("../models/product.model");

module.exports = (app) => {

    const productController = require("../controllers/product.controller");

    app.get('/products', productController.getProducts );

    app.post('/products', productController.validate(), productController.addProduct );

    app.put('/products/:id', productController.updateProduct )

    app.get('/products/:id', productController.getProduct )

    app.delete('/products/:id', productController.deleteProduct )

}