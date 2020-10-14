require('dotenv').config();

const express = require('express');

const { config: { PORT } } = require('./config');
const { connectToDb } = require('./db');
const { productRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);

async function startApp() {
  try {
    await connectToDb();

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (error) {
    console.log('Server Error ', error.message);
    process.exit(1);
  }
}

startApp();

process.on('SIGTERM', () => {
  app.close(() => {
    process.exit(0);
  });
});
