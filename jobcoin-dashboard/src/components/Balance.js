import React, { Component } from 'react';
import '../stylesheets/balance.css';

class Balance extends Component {

  render() {
    return (
      <div className="border balance">
          <h1>Jobcoin Balance</h1>
          <p>{this.props.balance}</p>
      </div>
    );
  }
}

export default Balance;