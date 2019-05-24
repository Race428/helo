import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }


    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }


    register = (req, res) => { 
        console.log(this.state)
        axios.post('/auth/register',  {
            username: this.state.username,
            password: this.state.password
        }).then((res) => { 
            console.log(res.data)
        })
        this.props.history.push('/home')
    }


    login = (req, res ) => { 
        axios.post('/auth/login', {
            username: this.state.username,
            password: this.state.password
        }).then((res) => { 
            console.log(res.data)

        })
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>This is auth

                <input onChange={e => this.handleChange('username', e.target.value)} placeholder='username' />
                <input onChange={e => this.handleChange("password", e.target.value)} placeholder='password' />

                <button  onClick={this.login}>Log in</button>
                <button onClick={this.register}> Register</button>


            </div>
        )
    }
}
