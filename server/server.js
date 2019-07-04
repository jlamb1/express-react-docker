const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../client/build/')));

const PORT = process.env.PORT || 8080;

app.get('/ping', function (req, res) {
 return res.send('pong');
});

if (process.env.NODE_ENV == `production`) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT);

console.log(`server is listening on port ${PORT}`)