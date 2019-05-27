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

    document.getElementById("transfer-form").reset()

    setTimeout(() => {
      this.props.fetchUserData()
    }, 1000)
  }


  render() {
    return (
      <div className="border transfer">
         <h4>Send Jobcoin</h4>
         <div className="line"></div>
         <form id="transfer-form" onSubmit={this.handleSubmit}>
           <label className="form-spacing">Destination Address</label>
           <input  
              className="form-spacing input" 
              type="text" 
              name="destinationAddress" 
              onChange={this.handleChange} />
           <label  className="form-spacing">Amount to Send</label>
           <input  
              className="form-spacing input" 
              type="number" 
              step=".00000000000001" 
              name="amount" 
              onChange={this.handleChange}/>
           <input className="button form-spacing" type="submit" value="Send Jobcoins"/>
         </form>
      </div>
    );
  }
}

export default Transfer;