const express = require('express');
const productRoute = express.Router();
const fs = require('fs');
const path = require('path');

const productDB = fs.readFileSync(`${__dirname}/../../data/products.json`, {
  encoding: 'utf-8',
});
const products = JSON.parse(productDB);
const updateDB = (updatedArr) => {
  fs.writeFileSync(
    `${__dirname}/../../data/products.json`,
    JSON.stringify(updatedArr),
    { encoding: 'utf-8' }
  );
};

productRoute.get('/', (req, res) => {
  let { colors, sizes } = req.query;
  let getByQuery;
  if (colors || sizes) {
    getByQuery = products.filter((p) => {
      if (colors && sizes) {
        return p.colors.includes(colors) && p.sizes.includes(sizes);
      } else if (colors) {
        return p.colors.includes(colors);
      } else if (sizes) {
        return p.sizes.includes(sizes);
      }
      return false;
    });
  } else getByQuery = products;
  res.send(getByQuery);
});
productRoute.get('/:id', (req, res) => {
  const findOne = products.find((p) => p.id == parseInt(req.params.id));
  res.send(findOne);
});
productRoute.post('/', (req, res) => {
  products.push(req.body);
  updateDB(products);
  res.send(products);
});

productRoute.delete('/:id', (req, res) => {
  const remainingProducts = products.filter(
    (p) => p.id != parseInt(req.params.id)
  );
  updateDB(remainingProducts);
  res.send(remainingProducts);
});

module.exports = productRoute;
