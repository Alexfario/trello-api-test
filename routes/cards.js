const express = require('express');
const mongoose = require('mongoose');
const { }


const router = express.Router();


const Card = mongoose.model()




router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/:cardId', (req, res) => {
  const { cardId } = req.params;
  const card = fakeCards.find(({ id }) => id === cardId);

  res.send(card || 'there is no card with this id');
});

router.post('/', (req, res) => {
  res.send('respond with a resource');
});

router.put('/:cardId', (req, res) => {
  res.send('respond with a resource');
});

router.delete('/:cardId', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
