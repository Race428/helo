const express = require('express')
const app = express()

require('dotenv').config()

const ctrl = require('./controller')

const massive = require('massive')

const port = 4321

const { CONNECTION_STRING } = process.env


app.use(express.json())

app.listen(port, () => {
    console.log('Listening on ', port)
})


massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!')
})




app.post('/api/auth/register', ctrl.register)

//Write a POST endpoint in your server for registering.
// The endpoint should pull the username and password off of the body.
// The endpoint create a new user in the database.
// The endpoint should respond with the newly created user.