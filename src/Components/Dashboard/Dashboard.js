import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPostsChecked: true,
            posts: [],
            user_id: props.userObj.id
        }
    }


    // async componentDidUpdate(){
    //     this.myPostsChecked()
    // }


    async componentDidMount() {
        if (this.state.myPostsChecked === true) {
            await axios.get('/getposts').then(res => {
                this.setState({
                    posts: res.data
                })
            })
        }
        else {
            const { user_id } = this.state
            await axios.get('getnouserposts', { user_id }).then(res => {
                this.setState({
                    posts: res.data
                })
            })
        }

    }

    myPostsChecked = () => {
        this.setState({
            myPostsChecked: !this.state.myPostsChecked
        })
        this.forceUpdate()
        
        // if (this.state.myPostsChecked === true) {
        //      axios.get('/getposts').then(res => {
        //         this.setState({
        //             posts: res.data
        //         })
        //     })
        // }
        // else {
        //     const { user_id } = this.state
        //      axios.get('getnouserposts', { user_id }).then(res => {
        //         this.setState({
        //             posts: res.data
        //         })
        //     })
        // }
    }

    render() {
        const posts = this.state.posts.map((element) => {
            return <div
                key={element.id}>
                {/* <img src={`${element.posts.profile_pic}`} alt='profile' /> */}
                <h1>{element.username}</h1>
                <h1>{element.title}</h1>

            </div>
        })
        return (
            <div>This is Dashboard
            <input placeholder='search' />
                <label> My Posts
            <input
                        onClick={this.myPostsChecked}
                        type='checkbox' checked={this.state.myPostsChecked} />
                </label>
                {posts}


            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    console.log(reduxState)
    const { userObj } = reduxState
    console.log(typeof userObj)
    return {
        userObj
    }
}
export default connect(mapStateToProps)(Dashboard)