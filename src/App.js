import React from 'react';
import './App.css';
import Header from './Nav/Header';
import Nav from './Nav/Nav';
import{BrowserRouter as Router} from 'react-router-dom'
import Content from './Content/Content'

class App extends React.Component {

  state = {
    user: null
  }
  
  render(){
    return (
      <Router>
      <div className="App">
        <Nav user={this.state.user} />
        <Header />
        <Content />
        
      </div>
      </Router>
    );
  }
}

export default App;
