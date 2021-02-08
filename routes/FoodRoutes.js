// configurar el Crud con sus rutas. Bloque try/catch para enviar los datos de regreso del postman

const express = require('express');
const foodModel = require('../models/food');
const app = express();

// Muestra de todos los elementos
app.get('/foods', async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Realizar el CREATE

app.post('/food', async (req, res) => { //cambiar en el postman el metodo de get a post
    const food = new foodModel(req.body);
  
    try {
      await food.save(); //el save para guardarlos
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//   Realizar el DELETE

app.delete('/food/:id', async (req, res) => { //cambiar en el postman el metodo a delete
    try {
      const food = await foodModel.findByIdAndDelete(req.params.id);
  
      if (!food) res.status(404).send("Elemento no encontrado");
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Realizar el UPDATE

app.patch('/food/:id', async (req, res) => { //cambiar el motodo a PATCH en el postman
    try {
      await foodModel.findByIdAndUpdate(req.params.id, req.body);
      await foodModel.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app