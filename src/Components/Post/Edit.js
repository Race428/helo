import React, {Component} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'



class Edit extends Component { 

constructor(props){
    super(props)
    this.state ={ 
        title: '',
        image:'',
        content: '',
        post_id: this.props.match.params.postid

    }
}

    sendToDb = async (req, res) => { 
        console.log(this.state.post_id)
       await axios.put(`/post/edit/${this.state.post_id}`,{
            title: this.state.title,
            img: this.state.image,
            content: this.state.content,
        
        })

        this.props.history.push('/dashboard')
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }
    render() { 
        console.log()
        return(
            <div>

            <img src ={`${this.state.image}`} alt = 'pic' /> 
            <label>Title:
            <input 
            onChange = {e => this.handleChange('title', e.target.value)}
            placeholder = 'title'/>
            </label>
            <input 
             onChange = {e => this.handleChange('image', e.target.value)}
            placeholder = 'image URL '/>

            <input 
             onChange = {e => this.handleChange('content', e.target.value)}
            placeholder = 'Content'/>
            <button
            onClick={this.sendToDb}
            >Post</button>

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
export default connect(mapStateToProps)(Edit)
