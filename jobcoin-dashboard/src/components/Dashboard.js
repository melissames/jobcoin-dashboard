import React, { Component } from 'react';
import Nav from './Nav.js';
import Balance from './Balance.js';
import Transfer from './Transfer.js';
import HistoryGraph from './HistoryGraph';
import '../stylesheets/dashboard.css';

class Dashboard extends Component {

  render() {
    console.log(this.props.userName)
    return (
      <div className="dashboard">
          <Nav userName={this.props.userName}/>
          <div className="dashboard-container">
            <Balance balance={this.props.userData.balance} />
            <Transfer user={this.props.userName} />
            <HistoryGraph />
          </div> 
      </div>
    );
  }
}

export default Dashboard;