const Quote = require('../models/quote');

const quoteController = {};

quoteController.findAll = (req, res) => {
  Quote.findAll()
  .then(quotes => {
    res.json({
      message: 'Success',
      data: quotes
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

quoteController.findById = (req, res) => {
  Quote.findById(req.params.id)
  .then(quote => {
    res.json({
      message: "Sucess",
      data: quote
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = quoteController;
