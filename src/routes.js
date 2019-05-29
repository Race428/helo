import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Auth from './Components/Auth/Auth'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import Edit from './Components/Post/Edit'



export default ( 
    <Switch>
        <Route exact path = '/' component = { Auth}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/new' component = {Form}/>
        <Route path = '/post/:postid' component = {Post}/>
        <Route path = '/edit/:postid' component = {Edit}/>

    </Switch>
)