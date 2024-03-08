const express = require('express');

const app = express();
const port = 3001;

app.get('/addTwoNumbers', (req, res) => {
    // Get the query parameters from the URL
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);

    // Perform the addition
    const result = number1 + number2;

    // Send the result as the response
    res.json({statuscode: 200, data: `The result of ${number1} + ${number2} is ${result}`});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});