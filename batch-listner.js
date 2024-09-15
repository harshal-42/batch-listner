const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());



app.post('/', (req, res) => {

  const message = req.body.data;

  console.log('Received batch message:', message);

  // Simulate processing the batch

  res.status(200).send('Batch processed');

});



app.listen(3000, () => {

  console.log('Batch listener running on port 3000');

});
