require('dotenv').config()

// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

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

// Root runs React app if production
if (process.env.NODE_ENV == `production`) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

// test POST
app.post('/hello', function (req, res) {
  // create HubSpot GET request
  // https://developers.hubspot.com/docs/methods/contacts/get_contact_by_email
  getContactByEmail = () => {
    const getOptions = {
      hostname: 'api.hubapi.com',
      path: `/contacts/v1/contact/email/${req.body.email}/profile?hapikey=${hapikey}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    }

    // Set up the request
    var getReq = http.request(getOptions, function (res) {
      console.log('Status: ' + res.statusCode)
      res.on('data', function (chunk) {
        console.log('Response: ' + chunk)
      })
    })

    // getReq.write(putData)
    getReq.end()

  }

  getContactByEmail()

// console.log(req.body.email)
  res.send(res)
  // res.json({ message: res })
})

// Start App
app.listen(PORT)

// Log successful start & which port
console.log(`server is listening on port ${PORT}`)
