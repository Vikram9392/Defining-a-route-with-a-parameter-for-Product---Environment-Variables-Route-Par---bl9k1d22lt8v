const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  res.json(req.params)
  //Write a code here for endpoint /product/:productId and also print parameter in json form
});

module.exports = app;
