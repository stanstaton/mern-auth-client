import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Signup extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }

    storeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted', this.state)
    }

    render(){ 
        return (
            <div>
                <h2>Sign-up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input name="firstname" placeholder="Your First Name" onChange={this.storeInput} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input name="lastname" placeholder="Your Last Name" onChange={this.storeInput} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input name="email" placeholder="Your E-mail Address" onChange={this.storeInput} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Your Password" onChange={this.storeInput} />
                    </div>
                    <button type="submit" >Sign Me Up!</button>
                </form>
            </div>
        )
    }
}

export default Signup