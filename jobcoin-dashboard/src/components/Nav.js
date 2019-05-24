import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

  render() {
    return (
      <div className="nav">
         {this.props.userName} 
      </div>
    );
  }
}

export default Nav;