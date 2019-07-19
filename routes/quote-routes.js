const express = require('express');
const quoteRouter = express.Router();

const quoteController = require('../controllers/quote-controller');

quoteRouter.get('/', quoteController.findAll);

quoteRouter.get('/:id', quoteController.findById);

module.exports = quoteRouter;
