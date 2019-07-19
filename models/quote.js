const db = require('../db/config');

const Quote = {};

Quote.findAll = () => {
  return db.query(
    `SELECT * FROM quotes`
  );
};

Quote.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM quotes
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Quote;
