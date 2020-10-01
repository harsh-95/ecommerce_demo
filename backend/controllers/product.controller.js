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

    const {
        productId,
        productName,
        productPrice,
        productImgUrl,
        productCategory,
        productBrand,
        productAttributes
    } = req.body;
    
    const newProduct = new Product({
        productId: productId,
        productName: productName,
        productPrice: productPrice,
        productImgUrl: productImgUrl,
        productCategory: productCategory,
        productBrand: productBrand,
        productAttributes: productAttributes
    }); 

    newProduct.save((err,data) => {
            if (err) return console.error(err)
            res.status(200).json({
                message: "Product added"
            })
        }
    )
}

exports.updateProduct = (req, res, next) => {
    const updatedProduct = req.body;

    Product.update({_id: updatedProduct._id}, updatedProduct, (err, raw) => {
        if (err) return console.error(err)
        res.status(200).json({
            raw: raw,
        })
    })
}

 