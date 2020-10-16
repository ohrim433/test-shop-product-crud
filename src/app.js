require('dotenv').config();

const express = require('express');

const { config: { PORT } } = require('./config');
const { connectToDb } = require('./db');
const {
  messagesEnum: { APP_STARTED },
  errorMessagesEnum: { SERVER_ERROR },
  responseStatusCodesEnum,
} = require('./helpers');
const { categoryRouter, productRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.use('*', (err, req, res, next) => {
  res
    .status(err.status || responseStatusCodesEnum.SERVER_ERROR)
    .json({
      message: err.message || 'Unknown Error',
      code: err.code,
    });
});

async function startApp() {
  try {
    await connectToDb();

    app.listen(PORT, () => console.log(`${APP_STARTED.message} ${PORT}`));
  } catch (error) {
    console.log(SERVER_ERROR.message, error.message);
    process.exit(1);
  }
}

startApp();

process.on('SIGTERM', () => {
  app.close(() => {
    process.exit(0);
  });
});
