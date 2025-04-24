const exp = require('constants');
const express = require('express');
const PORT = process.env.PORT || 5500;
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public",'index.html'));
});

// Handle form submission and store data in JSON file
app.post('/submit', (req, res) => {
    // Read existing data from data.json
    const dataPath = path.join(__dirname, 'data.json');
    const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    // Add new form data to the array
    existingData.push(req.body);

    // Write updated data back to data.json
    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));

    // Send a response to the client
    res.send('Form data has been stored in data.json');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
