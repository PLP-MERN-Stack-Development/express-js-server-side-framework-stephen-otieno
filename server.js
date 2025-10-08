// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productModel = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;



//  Middleware
app.use(bodyParser.json());
app.use(logger);
app.use(auth);

//  Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/products', productModel);

//  Global Error Handler
app.use(errorHandler);

//  Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});