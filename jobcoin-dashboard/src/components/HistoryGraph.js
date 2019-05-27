import React from 'react';
import { Line } from 'react-chartjs-2';
import '../stylesheets/historygraph.css';

const HistoryGraph = props => {

  let transactions = [...props.transactions]
  let balance = parseInt(props.balance)

  for(let i = transactions.length -1; i >= 0; i--){
    if(transactions[i].fromAddress === props.user){
      balance = balance - parseInt(transactions[i].amount)
      transactions[i].balance = balance
    } else {
      balance = balance + parseInt(transactions[i].amount)
      transactions[i].balance = balance
    }
  }

  let transactionData = transactions.map(transaction => transaction.balance)
  let dates = transactions.map(transaction => transaction.timestamp)

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