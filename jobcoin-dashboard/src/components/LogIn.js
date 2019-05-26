import React, { Component } from 'react';
import logo from '../gemini-logo.svg';
import '../stylesheets/login.css';

class LogIn extends Component {

  render() {
    return (
      <div className="signin-container">
        <img src={logo} alt="" className="login-logo"/>
        <form  className="signin-form" onSubmit={this.props.handleSubmit}>
          <h3>Welcome! Sign in with your JobCoin Address</h3>
          <div className="form-inputs">
            <label>JobCoin Address</label>
            <input type="text" onChange={this.props.handleChange}/>
            <input type="submit" value="Sign In"/>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;