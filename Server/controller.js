module.exports ={

Register:  async (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body
    console.log('this is the req', req.body)
    const users =  await db.register({username, password}).then((data) => {
        console.log('this is the data', data)
        res.status(200).send(data)})
  
    
},

Login: async (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body 
    console.log('this is the req of login', req.body)
    const users = await db.login({username, password}).then((data) => {
        console.log('this is the data', req.data)

        res.status(200).send(data)})
}
}