const Product = require("../models/product.model");

exports.getProducts = (req, res, next) => {
    Product.find().then(
        (products) => {
            res.status(200).json(products)
        }
    ).catch(
        (error) => {
            error: error
        }
    )
}

exports.addProduct = (req, res, next) => {
    
    const newProduct = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand,
        productAttributes: req.body.productAttributes
    }); 

    newProduct.save().then(
        () => {
            res.status(200).json({
                message: "Product added"
            })
        }
    ).catch(
        (error) => {
            error: error
        }
    )
}

