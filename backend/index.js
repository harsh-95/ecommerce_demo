const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const autoIncrement = require("mongoose-auto-increment");

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))

const mongoose = require("mongoose");
const port = 8080;

const connectionString = "";


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

//for using autoIncrement 
autoIncrement.initialize(mongoose.connection);

//Routers
require('./routes/product.route')(app)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
