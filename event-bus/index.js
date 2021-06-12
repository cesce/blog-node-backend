const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT | 4003;

app.use(express.json());

app.post('/events', (req, res) => {
  // We will take all kind of event, JSON | string | number | ...
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);

  res.send({ status: ok });
});

app.listen(PORT, () => {
  console.log(`event-bus listening on port: ${PORT}`);
});
