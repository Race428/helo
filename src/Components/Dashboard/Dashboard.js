import React, {Component} from 'react'


export default class Dashboard extends Component { 
   constructor(){
       super()
   
    this.state = { 
        myPostsChecked: true,
        
    }
   }


    myPostsChecked = () => { 
        this.setState({
            myPostsChecked: !this.state.myPostsChecked
        })
    }
    
    render() { 
        return(
            <div>This is Dashboard
            <input placeholder= 'search'/> 
            <label> My Posts
            <input 
            onClick={this.myPostsChecked}
            type = 'checkbox' checked={this.state.myPostsChecked} />
            </label>
            </div>
        )
    }
}
