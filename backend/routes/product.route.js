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

    app.delete('/:postId',async(req,res)=>{
        try{
            const removedPost= await Product.remove({_id:req.params.postId})
            res.json(removedPost)
        }catch(err){
            res.json({message:err})
        }
    })
}