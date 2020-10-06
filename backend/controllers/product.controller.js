const Product = require("../models/product.model");
const { body, validationResult } = require("express-validator");

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

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.json({ errors: errors.array() })
        return;
    }

    const {
        productId,
        productName,
        retailPrice,
        salePrice,
        imgUrl,
        category,
        brand,
        color,
        gender,
        size,
        material
    } = req.body;

    const newProduct = new Product({
        productId: productId,
        productName: productName,
        productPrice: {
            retail: retailPrice,
            sale: salePrice
        },
        productImgUrl: imgUrl,
        productCategory: category,
        productBrand: brand,
        productAttributes: {
            color: color,
            gender: gender,
            size: size,
            material: material,
        }
    });

    newProduct.save((err, data) => {
        if (err) return console.error(err)
        res.status(200).json({
            message: "Product added"
        })
    }
    )
}

exports.updateProduct = (req, res, next) => {

    const {
        productId,
        productName,
        retailPrice,
        salePrice,
        imgUrl,
        category,
        brand,
        color,
        gender,
        size,
        material
    } = req.body;

    const updatedProduct = {
        productId: productId,
        productName: productName,
        productPrice: {
            retail: retailPrice,
            sale: salePrice
        },
        productImgUrl: imgUrl,
        productCategory: category,
        productBrand: brand,
        productAttributes: {
            color: color,
            gender: gender,
            size: size,
            material: material,
        }
    }

    Product.updateOne({ _id: req.params.id }, updatedProduct, (err, raw) => {
        if (err) return console.error(err)
        res.status(200).json({
            raw: raw,
        })
    })

}


exports.getProduct = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id)
        res.status(200).json(products)
    } catch (err) {
        res.send("error" + err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const removedProduct = await Product.deleteOne({ _id: req.params.id })
        res.status(200).json(removedProduct)
    } catch (err) {
        res.json({ message: err })
    }
}

exports.validate = () => {

    return [
        body('productId', 'Product Id is required').notEmpty(),
        body('productName', 'Product Name is required').notEmpty(),
        body('retailPrice', 'Retail Price is required').notEmpty().isNumeric(),
        body('salePrice', 'Sale Price is required').notEmpty().isNumeric(),
        body('imgUrl', 'Image Url is required').notEmpty(),
        body('category', 'Category is required').notEmpty(),
        body('brand', 'Brand is required').notEmpty(),
        body('color', 'Product Color is required').notEmpty(),
        body('gender', 'Specify for which gender is the product').notEmpty(),
        body('size', 'Product Size is required').notEmpty(),
        body('material', 'Product Material is required').notEmpty()
    ]

}