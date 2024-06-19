// Load the required module
const express = require('express');

// Creates an instance of express
const app = express();
const port = 3000; // Define the port number

// Set up a simple route for GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Make the application listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
