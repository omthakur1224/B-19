const express = require('express');
const users = require('./users');


const app = express();

app.use(express.json());

let port = 8000;

app.use('/users',users);
app.use('/products',require('./products'))

app.use('/',users)
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});