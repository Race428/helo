import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Nav extends Component {



    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username,
            password: this.props.password,
            profile_pic: this.props.profile_pic
        }
        console.log(props)
    }


    render() {

        return (

            <div>

                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>


                <Link to='/new'>
                    <button>New Post</button>
                </Link>

                <Link to='/'>
                    <button>Logout</button>
                </Link>



            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
  const {
    userObj } = reduxState
  return {
    userObj
  }
}
export default connect(mapStateToProps)(Nav)


