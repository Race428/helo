import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// import {updateUserDetails} from '../../Redux/reducer'

import '../Dashboard/Dashboard.css'
import axios from 'axios';
class Nav extends Component {


async componentDidMount(){
   await axios.get('/api/auth/me').then(res => { 
       this.props.updateUserDetails(res.data)

   })

}
    constructor(props) {
        super(props)
        this.state = {
           userObj: this.props.userObj
        }
        console.log('they there! ',props)
    }

  

    logout(){
        axios.post('/logout')
    }

    render() {

        return (
<>
            {
            this.props.location.pathname === '/'
            ? 
            null
            :

            <div>
                <h1>{this.props.userObj.username}</h1>
                <img 
                     id='profile-pic'
                
                src ={`${this.props.userObj.profile_pic}`} alt = 'profile' /> 



                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>


                <Link to='/new'>
                    <button>New Post</button>
                </Link>

                <Link to='/'>
                    <button
                    onClick={this.logout}
                    >Logout</button>
                </Link>


                </div>
            }
                </>
        )
    }
}
const mapStateToProps = (reduxState) => {
    console.log(reduxState)
  const {userObj}= reduxState
  console.log(typeof userObj)
  return {
    userObj
  }
}
export default connect(mapStateToProps)(withRouter(Nav))


