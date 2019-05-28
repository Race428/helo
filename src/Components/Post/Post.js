import React, {Component} from 'react'
import axios from 'axios';


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
                <h1>{element.title}</h1>
            
            </div>
        })
        return(
            <div>This is Post
                {post}
            </div>
        )
    }
}
