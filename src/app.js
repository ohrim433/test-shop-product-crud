require('dotenv').config();

const express = require('express');

const { config: { PORT } } = require('./config');
const { connectToDb } = require('./helpers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
