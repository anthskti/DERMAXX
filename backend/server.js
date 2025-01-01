
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
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

// creating connection
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


