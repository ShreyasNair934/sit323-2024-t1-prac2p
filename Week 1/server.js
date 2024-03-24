const express = require('express');

const app = express();
const port = 3001;

//create a route
app.get('/addTwoNumbers', (req, res) => {
    
    //Get two numbers from the query string in the URL
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);

   //store the result of adding the two numbers
    const result = number1 + number2;

    //send a response to the client
    res.json({statuscode: 200, data: `The result of ${number1} + ${number2} is ${result}`});
});

//start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});