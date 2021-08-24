const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB;

mongoose.connect(`${MONGODB_URL}/flowers`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const {getFlowers, getFavFlower, addFavFlower, deleteFlower, updateFlower } = require('./controllers/flower.controller')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World")
  })
   
app.get('/flowers', getFlowers );
app.get('/favFlowers', getFavFlower );
app.post('/favFlower', addFavFlower );
app.delete('/favFlower/:id', deleteFlower);
app.put('/favFlower/:id', updateFlower)


  app.listen(PORT, () => {
      console.log("Server listening on PORT", PORT);
  });

