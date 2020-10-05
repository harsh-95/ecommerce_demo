const Product = require("../models/product.model");

module.exports = (app) => {

    const productController = require("../controllers/product.controller");

    app.get('/getAllProducts', productController.getProducts );

    app.post('/addProducts', productController.addProduct );

    app.put('/updateProduct', productController.updateProduct )

    app.get('/:id',async(req,res)=>{
        try{
        const products= await Product.findById(req.params.id)
        res.json(products)
        }catch (err){
            res.send("error" + err)
        }

    })

    app.delete('/:productId',async(req,res)=>{
        try{
            const removedProduct= await Product.remove({_id:req.params.productId})
            res.json(removedProduct)
        }catch(err){
            res.json({message:err})
        }
    })
}