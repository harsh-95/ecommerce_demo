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

    Product.updateOne({_id: updatedProduct._id, productId: updatedProduct.productId}, updatedProduct, (err, raw) => {
        if (err) return console.error(err)
        res.status(200).json({
            raw: raw,
        })
    })
    
}

 