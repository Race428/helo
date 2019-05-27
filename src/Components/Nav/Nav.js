import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class Nav extends Component {



    constructor(props) {
        super(props)
        this.state = {
           userObj: this.props.userObj
        }
        console.log('they there! ',props)
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
                <h1>{this.props.userObj.profile_pic}</h1>



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


