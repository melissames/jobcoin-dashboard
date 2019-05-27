import React, { Component } from 'react';
import Nav from './Nav.js';
import Balance from './Balance.js';
import Transfer from './Transfer.js';
import HistoryGraph from './HistoryGraph';
import '../stylesheets/dashboard.css';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
          <Nav 
            user={this.props.userName}
            handleLogOut={this.props.handleLogOut}/>
          <div className="dashboard-container">
            <Balance balance={this.props.userData.balance} />
            <Transfer 
              user={this.props.userName} 
              fetchUserData={this.props.fetchUserData}/>
            <HistoryGraph 
              transactions={this.props.userData.transactions}
              user={this.props.userName}
              balance={this.props.userData.balance}/>
          </div> 
      </div>
    );
  }
}

export default Dashboard;