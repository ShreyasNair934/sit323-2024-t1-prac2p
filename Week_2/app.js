const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint for addition operation
app.get('/addition', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    arithmeticOperation(res, num1, num2, (a, b) => a + b);
});

// Endpoint for subtraction operation
app.get('/subtraction', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    arithmeticOperation(res, num1, num2, (a, b) => a - b);
});

// Endpoint for multiplication operation
app.get('/multiplication', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    arithmeticOperation(res, num1, num2, (a, b) => a * b);
});

// Endpoint for division operation
app.get('/division', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    arithmeticOperation(res, num1, num2, (a, b) => {
        if (b === 0) throw new Error('Cannot divide by zero.');
        return a / b;
    });
});

// This function performs the desired arithmetic operation
function arithmeticOperation(res, num1, num2, resultOp) {
    try {
        const x = parseFloat(num1);
        const y = parseFloat(num2);

        if (isNaN(x) || isNaN(y)) {
            throw new Error('Please check whether both numbers are valid.');
        }

        const result = resultOp(x, y);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});
