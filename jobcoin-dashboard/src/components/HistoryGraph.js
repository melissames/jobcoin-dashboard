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

  const timeOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }

  let dates = transactions.map(function(transaction) {
    let date = new Date(transaction.timestamp)
    return new Intl.DateTimeFormat('en-US', timeOptions).format(date)
  })
  dates.unshift("Account Opened")

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Balance",
        data: transactionData,
        backgroundColor: '#57D6F5',
        pointBackgroundColor: '#57D6F5'
      }
    ]
  }

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Jobcoin History Graph'
    }
  }

  return (
    <div className="border history-graph">
      <Line data={data} options={options}/>
    </div>
  );

}

export default HistoryGraph;