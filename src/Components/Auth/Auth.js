import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserDetails } from '../../Redux/reducer'




class Auth extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            profile_pic: ''
        }
    }


    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }


    register = () => {
        console.log(this.state)
        axios.post('/auth/register', {
            username: this.state.username,
            password: this.state.password,
            profile_pic: this.state.profile_pic
        }).then(response => {
            this.props.updateUserDetails(response.data)

            console.log(response.data)
            this.props.history.push('/dashboard')
        })
    }


    login = (req, res) => {
        console.log(this.state)
        axios.post('/auth/login', {
            username: this.state.username,
            password: this.state.password,
            
        }).then((res) => {
            console.log(res)

            this.props.updateUserDetails(res.data)
            this.props.history.push('/dashboard')
        })
    }
    render() {
        return (
            <div>This is auth

                <input onChange={e => this.handleChange('username', e.target.value)} placeholder='username' />
                <input onChange={e => this.handleChange("password", e.target.value)} placeholder='password' />
                <input onChange={e => this.handleChange("profile_pic", e.target.value)} placeholder='profile pic' />


                <button onClick={this.login}>Log in</button>
                <button onClick={this.register}> Register</button>


            </div>
        )
    }
}


export default connect(null, { updateUserDetails })(Auth)