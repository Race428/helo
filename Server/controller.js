module.exports ={

Register:  async (req, res) => { 
    const db = req.app.get('db')
    const { username, password, profile_pic } = req.body
    console.log('this is the req', req.body)
    const users =  await db.register({username, password, profile_pic}).then((data) => {
        console.log('this is the data', data[0])
        res.status(200).send(data[0])})
  
    
},

Login: async (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body 
    console.log('this is the req of login', req.body)
    const users = await db.login({username, password}).then((data) => {
        console.log('this is the data', data[0])
        res.status(200).send(data[0])})
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
}


}