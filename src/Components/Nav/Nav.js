import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link , withRouter} from 'react-router-dom'


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
    username, password, profile_pic } = reduxState
  return {
    username, password, profile_pic
  }
}
export default connect(mapStateToProps)(withRouter(Nav))


