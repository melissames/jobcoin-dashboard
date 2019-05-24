import React, { Component } from 'react';
import Nav from './Nav.js'
import '../stylesheets/dashboard.css';

class Dashboard extends Component {

  render() {
      console.log(this.props)
    return (
      <div className="dashboard">
          <Nav userName={this.props.userName}/>
      </div>
    );
  }
}

export default Dashboard;