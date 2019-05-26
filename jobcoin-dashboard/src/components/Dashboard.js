import React, { Component } from 'react';
import Nav from './Nav.js';
import Balance from './Balance.js';
import Transfer from './Transfer.js';
import HistoryGraph from './HistoryGraph';
import '../stylesheets/dashboard.css';

class Dashboard extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="dashboard">
          <Nav userName={this.props.userName}/>
          <div className="dashboard-container">
            <Balance 
              balance={this.props.userData.balance}
              user={this.props.userName}/>
            <Transfer />
            <HistoryGraph />
          </div> 
      </div>
    );
  }
}

export default Dashboard;