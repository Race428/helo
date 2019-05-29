import React, { Component } from 'react'
import axios from 'axios';
// import { connect } from 'react-redux'
import './Dashboard.css'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPostsChecked: true,
            posts: [],
            user_id: '',
            search: ''
        }
    }


    // async componentDidUpdate(){
    //     this.myPostsChecked()
    // }


    componentDidMount() {
        
       axios.get('/getposts').then(res => {
            this.setState({
                posts: res.data.data,
                user_id: res.data.user_id
            })
            console.log(res)
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
                return<Link to={`/post/${element.post_id}`}>
                 <div
                    key={element.post_id}>
                     <img
                     id='profile-pic'
                     src={`${element.profile_pic}`} alt='profile' />                    
                    <h1>{element.username}</h1>                   
                    <h1>{element.title}</h1>

                </div>
                </Link>
           
            })
            console.log('hey there')
        }

        else {
            var posts = this.state.posts.filter((element) => {
                console.log(element)
                return element.title.includes(this.state.search)
            }).map((element) => {
                if(element.author_id!== this.state.user_id){
                return <Link to={`/post/${element.id}`}>
                <div
                    key={element.post_id}>
                     <img 
                     id='profile-pic'
                     src={`${element.profile_pic}`} alt='profile' />
                    <h1>{element.username}</h1>
                    <h1>{element.title}</h1>

                </div>
                </Link>
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


