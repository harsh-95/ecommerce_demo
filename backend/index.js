const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))
const router = express.Router();
const mongoose = require("mongoose");
const port = 8080;

var MongoClient = require('mongodb').MongoClient;
        
const url = "mongodb+srv://demoUser:x2umTAa29blMQk0R@cluster0.2erxl.mongodb.net/testdb?retryWrites=true&w=majority";
const conn = mongoose.createConnection("mongodb+srv://demoUser:x2umTAa29blMQk0R@cluster0.2erxl.mongodb.net/testdb?retryWrites=true&w=majority");

mongoose.connect(url).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

conn.on('open', function () {
    conn.db.listCollections().toArray(function (err, collectionNames) {
        if (err) { 
            console.log(err);
            return;
        } 

        if (collectionNames[0] === undefined) {  
            console.log('inside if');
              MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db("testdb");
                  dbo.createCollection("Products", function(err, res) {
                    if (err) throw err;
                    console.log("Collection created!");
                  });
                }); 
        } else {
            console.log(collectionNames); 
        }

        conn.close();
    });
});


//Routers
require('./routes/product.route')(app)
 
app.listen(port, () => {
    console.log("server is ON");
}); 