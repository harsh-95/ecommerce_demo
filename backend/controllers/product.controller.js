const mongoose = require("mongoose");
var ObjectID = require('mongodb').ObjectID;
mongoose.connect("mongodb+srv://demoUser:x2umTAa29blMQk0R@cluster0.2erxl.mongodb.net/testdb?retryWrites=true&w=majority");
var conn = mongoose.connection;


exports.getProducts = (req, res, next) => {
    conn.collection('Products').find({}).toArray((err, productsList) =>{
        if(err) throw err;
        res.status(200).json(productsList)
    });
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

    var productDetails = [{
            _id: new ObjectID(),
            productId: productId,
            productName: productName,
            productPrice: [
                {
                    retail: productPrice[0].retail,
                    sale: productPrice[0].sale
                }
            ], 
            productImgUrl: productImgUrl,
            productCategory: productCategory,
            productBrand: productBrand,
            productAttributes: [
                {
                    color: productAttributes[0].color,
                    gender: productAttributes[0].gender,
                    size: productAttributes[0].size,
                    type: productAttributes[0].type,
                    material: productAttributes[0].material
                }
            ]
    }]

    conn.collection('Products').insertMany(productDetails).then(() => {
        res.send("Product added to db")
    });
}

 
 