module.exports = (app) => {

    const productController = require("../controllers/product.controller");

    app.get('/getAllProducts', productController.getProducts );

    app.post('/addProducts', productController.addProduct );

}