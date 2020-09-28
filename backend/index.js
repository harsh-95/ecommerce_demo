const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("api response");
});

app.listen(port, () => {
    console.log("server is ON");
});