import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../stylesheets/historygraph.css';

class HistoryGraph extends Component {

  render() {

    return (
      <div className="border history-graph">
        <h1>Jobcoin History Graph</h1>
      </div>
    );
  }
}

export default HistoryGraph;