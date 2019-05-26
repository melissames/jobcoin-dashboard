import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <div>
          {this.props.userName} 
        </div>
        <div>
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