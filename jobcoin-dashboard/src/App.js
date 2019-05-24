import React, { Component } from 'react';
import LogIn from './components/LogIn.js';
import Dashboard from './components/Dashboard.js'
import './App.css';

class App extends Component {

    state = {
      userName: '',
      userData: null,
      submitted: false
  }

  handleLogInChange = e => {
    this.setState({userName: e.target.value})
  }

  handleLogInSubmit = e => {
    e.preventDefault()

    fetch(`http://jobcoin.gemini.com/nuclei/api/addresses/${this.state.username}`)
        .then(res => res.json())
        .then(json => this.setState({userData: json}))
        .catch(err => console.log(err))

  }

  render () {
    return (
      <div className="App">
        {this.state.userData
          ? <Dashboard userName={this.state.userName} userData={this.state.userData}/> 
          : <LogIn handleChange={this.handleLogInChange} handleSubmit={this.handleLogInSubmit}/>}
      </div>
    );
  }
}

export default App;