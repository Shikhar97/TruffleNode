const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  

let medicalBills = [];

// GET /items endpoint
app.get('/items', (req, res) => {
  res.json(medicalBills);
});

// POST /items endpoint
app.post('/items', (req, res) => {
  const medicalBill = req.body;
  // console.log(req.body);
  medicalBills.push(medicalBill);
  res.json(medicalBill);
});

module.exports = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
