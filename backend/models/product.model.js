const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const productSchema = mongoose.Schema({

    productId: { type: Number, unique: true },
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

//for auto incrementing productId
productSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'productId', startAt: 1001, incrementBy: 1 })

module.exports = mongoose.model('Product', productSchema );