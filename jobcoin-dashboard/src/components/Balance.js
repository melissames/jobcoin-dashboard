import React, { Component } from 'react';
import '../stylesheets/balance.css';

class Balance extends Component {

  render() {
    return (
      <div className="border balance">
          <h4>Jobcoin Balance</h4>
          <div className="line"></div>
          <p>{this.props.balance}</p>
      </div>
    );
  }
}

export default Balance;