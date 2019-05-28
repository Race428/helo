const express = require('express')

require('dotenv').config()


const app = express()

const massive = require('massive')

const port = 4321

const ctrl = require('./controller')
const { CONNECTION_STRING , SERVER_PORT } = process.env


app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log('Listening on ', SERVER_PORT)
})


massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!')
})




app.post('/auth/register', ctrl.Register)
app.post('/auth/login', ctrl.Login)
app.get('/getposts', ctrl.getPosts)
app.get('/getselectedpost/:post_id', ctrl.getSelectedPost)




//Write a POST endpoint in your server for registering.
// The endpoint should pull the username and password off of the body.
// The endpoint create a new user in the database.
// The endpoint should respond with the newly created user.