const mongoose = require('mongoose');

const { config: { MONGODB_URL } } = require('../config');

module.exports = () => {
  mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log(`Successfully connected to ${db.connections[0].name} database`))
    .catch((err) => console.error('Database connection error', err));
};
