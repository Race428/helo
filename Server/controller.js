module.exports ={

Register:  (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body
    console.log('this is the req', req.body)
    const users =  db.register({username, password}).then(res.send(res.data))
    
},

Login: (req, res) => { 
    const db = req.app.get('db')
    const { username, password } = req.body 
    const users = db.login({username, password}).then(res.send(res.data))
}
}