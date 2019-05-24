import React, { Component } from 'react';
import logo from '../gemini-logo.svg';
import '../stylesheets/login.css';

class LogIn extends Component {

  render() {
    return (
      <div>
        <div className="signin-form">
        <img src={logo} alt=""/>

          <form  onSubmit={this.props.handleSubmit}>
            <h1>Welcome! Sign in with your JobCoin Address</h1>
            <div className="form-inputs">
              <label>JobCoin Address</label>
              <input type="text" onChange={this.props.handleChange}/>
              <input type="submit" value="Sign In"/>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
}

export default LogIn;