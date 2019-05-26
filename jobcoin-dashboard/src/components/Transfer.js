import React, { Component } from 'react';
import '../stylesheets/transfer.css';

class Transfer extends Component {

  state = {
    formValues: {}
  }

  handleChange = e => {
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;

    formValues[name] = value;

    console.log(formValues)

    this.setState({formValues})
  }

  handleSubmit = e => {
    e.preventDefault()
    let user = this.props.user
    let destination = this.state.formValues.destinationAddress
    let amount = this.state.formValues.amount

    fetch(`http://jobcoin.gemini.com/nuclei/api/transactions?fromAddress=${user}&toAddress=${destination}&amount=${amount}`, {
      method: 'POST'
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="border transfer">
         <h1>Send Jobcoin</h1>
         <form onSubmit={this.handleSubmit}>
           <label>Destination Address</label>
           <input type="text" name="destinationAddress" onChange={this.handleChange} />
           <label>Amount to Send</label>
           <input type="number" name="amount" onChange={this.handleChange}/>
           <input type="submit" value="Amount to Send"/>
         </form>
      </div>
    );
  }
}

export default Transfer;