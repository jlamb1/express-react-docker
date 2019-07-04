// Import dependencies
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

// Define express variables
const app = express();
const PORT = process.env.PORT || 8080;

// Static rendering
app.use(express.static(path.join(__dirname, '../client/build/')));

// Test app is running
app.get('/ping', function (req, res) {
 return res.send('pong');
});

// Root runs React app if production
if (process.env.NODE_ENV == `production`) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT);

console.log(`server is listening on port ${PORT}`)