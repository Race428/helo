module.exports ={

Register:  async (req, res) => { 
    const db = req.app.get('db')
    const { username, password, profile_pic } = req.body
    console.log('this is the req', req.body)
    const {session} = req
    const users =  await db.register({username, password, profile_pic})

        session.client = users[0]
        console.log('this is the session', session.client)
        res.send(session.client)
      

  
    
},

Login: async (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body 
    console.log('this is the req of login', req.body)
    const clientResponse = await db.login({username, password})
    let client = clientResponse[0]
    delete client.password
    req.session.client = client
    console.log('this is the client dog', req.session.client)
    res.status(200).send(req.session.client)

},

getPosts: (req, res) => { 
    const db = req.app.get('db')
    db.getAllPosts().then((data) => { 
        console.log('this is the data',data)
        res.status(200).send(data)
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
    const {title, img, content, author_id} = req.body 
    db.createPost({title, img, content, author_id})
    res.sendStatus(200)
}


}