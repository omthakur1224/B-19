// Start here
const express = require('express');
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Route');
});
app.use('/user', userRoute);
app.use('/product', productRoute);

app.listen(8000, () => {
  console.log('listening on port 8000');
});
