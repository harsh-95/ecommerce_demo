const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    productId: { type: Number, unique: true, required: true },
    productName: { type: String, required: true },
    productImgUrl: { type: String, required: true },
    productPrice: {
        type: {
            retail: { type: Number },
            sale: { type: Number }
        }
    },
    productCategory: { type: String, required: true },
    productBrand: { type: String, required: true },
    productAttributes: {
        type: {
            color: { type: String },
            gender: { type: String },
            size: { type: String },
            material: { type: String },
        }
    }
    
})

module.exports = mongoose.model('Product', productSchema );