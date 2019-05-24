import React, { Component } from 'react'


export default class Auth extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    handleChage(prop, value) {
        this.setState = ({
            [prop]: value
        })
    }

    render() {
        return (
            <div>This is auth

                <input onChange={e => this.handleChage('username', e.target.value)} placeholder='username' />
                <input onChange={e => this.handleChage("password", e.target.value)} placeholder='password' />

                <button>Log in</button>
                <button> Register</button>


            </div>
        )
    }
}
