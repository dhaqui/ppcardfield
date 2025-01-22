const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.post('/create-order', (req, res) => {
    res.json({ orderID: 'testOrder123' }); // Replace with actual PayPal API call
});

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));