import React, {Component} from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom'

export default class Post  extends Component { 
    constructor(props){
        super(props)
            this.state= { 
                post_id:this.props.match.params.postid,
                post:[]
            }
        
    }
    
    componentDidMount(){
        axios.get(`/getselectedpost/${this.state.post_id}`).then(res => { 
            this.setState({
                post: res.data
            })
        })
        console.log(this.props)
    }



    render() { 
        const post = this.state.post.map((element, index) => { 
                console.log(element)
            return <div>
                <img src = {`${element.img}`} alt ='post pic'/> 
                <h1>{element.title}</h1>
                <h1>{element.content}</h1>
            </div>
        })
        return(
            <div>This is Post
                {post}
                <Link to ={`/edit/${this.state.post_id}`}>
                <button>Edit Post</button>
                </Link>
            </div>
        )
    }
}
