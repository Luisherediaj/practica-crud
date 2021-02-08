// Configurar el servidor y vincularlo a mongo atlas

const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://luish:practica@cluster0.adeuq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true //para quitar un deprecatingwarning. Server discovery and Monitoring está deprecado
});

app.use(foodRouter);

app.listen(3000, () => { console.log('El servidor funciona') });