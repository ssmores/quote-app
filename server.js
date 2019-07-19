const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');

app.use(express.static('build'));

app.use('/api/quotes', require('./routes/quote-routes'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`App up and running on port ${PORT}`)
});