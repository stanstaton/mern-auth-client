import React from 'react';
import './App.css';
import Header from './Nav/Header';
import Nav from './Nav/Nav';
import{BrowserRouter as Router} from 'react-router-dom'
import Content from './Content/Content'
import SERVER_URL from './Constants'
import axios from 'axios'

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount () {
    //Go look for a token
    this.getUser()
  }

  getUser = () => {
    //see if there is a token
    let token = localStorage.getItem('mernToken')

    //if there is a token, try to use it to get user info
    if(token) {
      console.log('token was', token)
      axios.get(`${SERVER_URL}/auth/current/user`, {
        headers: {'Authorization': `Bearer ${token}`}
      })
      .then(response => {
        console.log('success', response)
        this.setState({user: response.data.user})
      })
      .catch(err => {
        console.log(err)
      })

    }
  }
  
  render(){
    return (
      <Router>
      <div className="App">
        <Nav user={this.state.user} />
        <Header />
        <Content updateUser={this.getUser} user={this.state.user} />
        
      </div>
      </Router>
    );
  }
}

export default App;
