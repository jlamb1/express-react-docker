require('dotenv').config()

// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const request = require('request');

// ENV vars
const hapikey = process.env.HAPI_KEY

// Define express variables
const app = express()
const PORT = process.env.PORT || 8080

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Static rendering
app.use(express.static(path.join(__dirname, '../client/build/')))

// Test app is running
app.get('/ping', function (req, res) {
  return res.send('pong')
})

// Root runs React app
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })

// get contact by email
app.post('/get-contact-by-email', function (req, res) {

  request(`https://api.hubapi.com/contacts/v1/contact/email/${req.body.email}/profile?hapikey=${hapikey}`, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body)
  });


})

// Start App
app.listen(PORT)

// Log successful start & which port
console.log(`server is listening on port ${PORT}`)
