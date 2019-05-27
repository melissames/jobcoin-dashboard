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
          <div className="line"></div>
          <div className="form-inputs">
            <label className="form-spacing">JobCoin Address</label>
            <input className="form-spacing input" type="text" onChange={this.props.handleChange}/>
            <input className="button form-spacing" type="submit" value="Sign In"/>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;