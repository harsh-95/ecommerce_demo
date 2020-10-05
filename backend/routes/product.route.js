const Product = require("../models/product.model");

module.exports = (app) => {

    const productController = require("../controllers/product.controller");

    app.get('/getAllProducts', productController.getProducts );

    app.post('/addProducts', productController.validate(), productController.addProduct );

    app.put('/updateProduct', productController.updateProduct )

    app.get('/:id', productController.getParticularProduct )

    app.delete('/:productId', productController.deleteProduct )

}