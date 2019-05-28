import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPostsChecked: true,
            posts: [],
            user_id: props.userObj.id,
            search: ''
        }
    }


    // async componentDidUpdate(){
    //     this.myPostsChecked()
    // }


    async componentDidMount() {
        console.log(this.props.match)
        await axios.get('/getposts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
  
    

    myPostsChecked = () => {
        this.setState({
            myPostsChecked: !this.state.myPostsChecked
        })


      
    }


    searchChange(value) {
        this.setState({
            search: value
        })
    }




    render() {
        if (this.state.myPostsChecked === true) {
            var posts = this.state.posts.filter((element) => {
                console.log(element)
                return element.title.includes(this.state.search)
            }).map((element) => {
                return <div
                    key={element.id}>
                     <img src={`${element.profile_pic}`} alt='profile' />                    
                    <h1>{element.profile_pic}</h1>
                    <h1>{element.title}</h1>

                </div>
            })
        }

        else {
            var posts = this.state.posts.filter((element) => {
                console.log(element)
                return element.title.includes(this.state.search)
            }).map((element) => {
                if(element.author_id !== this.state.user_id){
                return <div
                    key={element.id}>
                     <img src={`${element.profile_pic}`} alt='profile' />
                    <h1>{element.username}</h1>
                    <h1>{element.title}</h1>

                </div>
            }})
            
            
        }

        return (
            <div>This is Dashboard
            <input onChange={e => this.searchChange(e.target.value)}
                    placeholder='search' />
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