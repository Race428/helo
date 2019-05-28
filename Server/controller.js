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

getPosts: async (req, res) => { 
    const db = req.app.get('db')
    db.getAllPosts().then((data) => { 
        console.log('this is the data',data)
        res.status(200).send(data)
    })
}


}