const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5656;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let medical_bills = [];

// POST endpoint
app.post('/bills', (req, res) => {
    const medical_bill = req.body;
    console.log(medical_bill);
    //Adding the bill details to the main list
    medical_bills.push(medical_bill);
    res.json(medical_bill);
});

// GET endpoint
app.get('/bills', (req, res) => {
    //Sending the list of bills
    console.log(medical_bills);
    res.json(medical_bills);
});

module.exports = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
