
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware ?? what is this
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Skincare Routine Builder!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// ----- Conecting Node.js to MySQL -----
const mysql = require('mysql2');

// Creating Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234',
    database: 'skincare_routine'
});

// Connecting to the MySQL srever
db.connect((err) => {
    if(err) {
        console.error('Error connecting to the databse: ' + err.stack);
        return;
    }
    
    console.log('Connected to the Database.');
});

// Handling Data; Product 
// Getting all Products: this will create a mysql query to retrieve all products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if(err) return res.status(500).json({ error: err.message})
        res.json(results);
    });
});

// Adding a New Product: creating a query to for adding a product.
app.post('/product', (req, res) => {
    const {name, description, price, brand} = req.body;
    const query = "INSERT INTO products (name, description, price, brand) VALUES (?, ?, ?, ?)";
    db.query(query, [name, description, price, brand], (err, results) => {
        if (err) return res.status(500).json({error: err.message});
        res.status(201).json({id: result.insertId, name, description, price, brand});
    });
});

// Creating a new Routine: adds a product into the routine.
app.post('/routines', (req, res) => {
    const {name, description, price, brand} =  req.body;
    const query = "INSERT INTO routines (name, description, price, brand) VALUES (?, ?, ?, ?)";
    db.query(query, [name, dsription, price, brand], (err, results) => {
        if (err) return res.status(500).json({error: err.message});
    });
});


