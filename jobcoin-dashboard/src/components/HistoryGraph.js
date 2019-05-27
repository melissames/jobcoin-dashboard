import React from 'react';
import { Line } from 'react-chartjs-2';
import '../stylesheets/historygraph.css';

const HistoryGraph = props => {

  let transactions = [...props.transactions]
  let balance = 0
  let transactionData = []
  transactionData[0] = balance

  transactions.map(transaction => {
    if(transaction.fromAddress === props.user){
      balance = balance - parseInt(transaction.amount)
      transactionData.push(balance)
    } else {
      balance = balance + parseInt(transaction.amount)
      transactionData.push(balance)
    }
  })

  let dates = transactions.map(function(transaction) {
    let date = new Date(transaction.timestamp)
    return new Intl.DateTimeFormat('en-US').format(date)
  })

  dates.unshift("Account Opened")

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Balance Over Time",
        data: transactionData
      }
    ]
  }

  return (
    <div className="border history-graph">
      <h1>Jobcoin History Graph</h1>
      <Line data={data} />
    </div>
  );

}

export default HistoryGraph;