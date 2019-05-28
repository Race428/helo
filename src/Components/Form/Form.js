import React, {Component} from 'react'


export default class Form extends Component { 


    render() { 
        return(
            <div>
            <label>Title:
            <input placeholder = 'title'/>
            </label>
            <input placeholder = 'image URL '/>

            <input placeholder = 'Content'/>


            </div>
        )
    }
}
