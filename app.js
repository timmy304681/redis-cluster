const express = require('express');
const app = express();
const cluster = require('./cache');

require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT;

app.get('/', async (req, res, next) => {
  try {
    await cluster.SET('k1', 'Hi! Cluster!');

    res.json({ data: 'add data successfully' });
  } catch (err) {
    next(err);
    res.json(err);
  }
});

//set port to 3000
app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
