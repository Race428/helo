import React, {Component} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'



class Form extends Component { 

constructor(props){
    super(props)
    this.state ={ 
        title: '',
        image:'',
        content: '',
        author_id: props.userObj.user_id
    }
}

    sendToDb = (req, res) => { 
        axios.post('/create/post',{
            title: this.state.title,
            image: this.state.image,
            content: this.state.content,
            author_id: this.state.author_id
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
export default connect(mapStateToProps)(Form)
