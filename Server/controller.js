module.exports ={

Register:  async (req, res) => { 
    const db = req.app.get('db')
    const { username, password, profile_pic } = req.body
    console.log('this is the req', req.body)
    const {session} = req
    const users =  await db.register({username, password, profile_pic})

        req.session.user_id = users[0].user_id
        console.log('this is the session', req.session.user_id)
        res.send(req.session.user_id)
      

  
    
},

Login: async (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body 
    console.log('this is the req of login', req.body)
    const clientResponse = await db.login({username, password})
    let client = clientResponse[0]
    delete client.password
    console.log('this is the client', client)
    req.session.user_id = client.user_id
    console.log('this is the client dog', req.session.user_id)
    res.status(200).send(client )

},

getPosts: (req, res) => { 
    const db = req.app.get('db')
    console.log('this is me', req.session)
    const {user_id} = req.session
    db.getAllPosts().then((data) => { 
        console.log('this is the data',data)
        
        res.status(200).send({data, user_id})
    })
},
getSelectedPost: (req, res) => { 
    const db = req.app.get('db')
    const {post_id} = req.params
    console.log('fuuunn',req.params)
    db.getSinglePost({post_id: +post_id}).then((data) => { 
        console.log('tee hee', data)
        res.status(200).send(data)
    })
},

createPost : (req, res) => { 
    const db = req.app.get('db')
    const {title, img, content} = req.body 
    const {user_id} = req.session
    db.createPost({title, img, content, author_id: user_id})
    res.sendStatus(200)
},

logout: (req, res) =>  { 
    console.log('this is the session', req.session)
    req.session.destroy()
    res.sendStatus(200)
    console.log('this is destroyed session', req.session)
},

sessionCheck(req, res) {
    console.log('this is req.session serverside', req.session.client)
    res.status(200).send(req.session.client)

  },

}