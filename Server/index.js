const express = require('express')

require('dotenv').config()


const app = express()

const session =require('express-session')

const massive = require('massive')

const port = 4321

const ctrl = require('./controller')
const { CONNECTION_STRING , SERVER_PORT, SESSION_SECRET } = process.env


app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

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
app.post('/create/post', ctrl.createPost)
app.post('/logout', ctrl.logout)
app.get('/api/auth/me',ctrl.authMe)
app.put('/post/edit/:post_id', ctrl.editPost)




//Write a POST endpoint in your server for registering.
// The endpoint should pull the username and password off of the body.
// The endpoint create a new user in the database.
// The endpoint should respond with the newly created user.