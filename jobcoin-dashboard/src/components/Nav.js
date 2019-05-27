import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <div>
          <strong>{this.props.user}</strong>
        </div>
        <div>
          <span>
            <img className="logo" src="https://gemini.com/wp-content/uploads/2016/02/gemini_symbol_rgb.png" alt="" />
          </span>
          <span 
            className="selected">
            Signed In 
          </span>
          <span 
            className="selected" 
            onClick={this.props.handleLogOut}> 
            Sign Out
          </span>
        </div>
      </div>
    );
  }
}

export default Nav;