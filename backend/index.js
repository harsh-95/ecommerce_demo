const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))

const mongoose = require("mongoose");
const port = 8080;

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

//Routers
require('./routes/product.route')(app)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});