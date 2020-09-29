const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const productRoutes = require("../backend/routes/product.route");

const connectionString = "mongodb+srv://demoUser:x2umTAa29blMQk0R@cluster0.2erxl.mongodb.net/testdb?retryWrites=true&w=majority";


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('mongodb successfully connected');
    }
).catch(
    (err) => {
        console.log('unable to connect');
        console.error(err);
    }
)

app.get('/', (req, res) => {
    res.send("api response");
});

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log("server is ON");
});