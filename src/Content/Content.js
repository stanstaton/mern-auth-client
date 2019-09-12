import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const Content = props => {
    return(
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" render={
                ()=> <Signup user={props.user} updateUser={props.updateUser} /> 
                } />
            <Route path="/login" component={Login} />
        </div>
    )
}

export default Content