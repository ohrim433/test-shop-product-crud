const mongoose = require('mongoose');

const { config: { MONGODB_URL } } = require('../config');
const { messagesEnum: { SUCCESS_CONNECT_TO_DB }, errorMessagesEnum: { DB_CONNECT_ERROR } } = require('../helpers');

module.exports = () => {
  mongoose
    .connect(
      MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    )
    .then((db) => console.log(`${SUCCESS_CONNECT_TO_DB.message} '${db.connections[0].name}'`))
    .catch((err) => console.error(DB_CONNECT_ERROR, err));
};
