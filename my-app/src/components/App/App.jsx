import "./App.css";
import React, { Component } from "react";
import ExchangeRates from "../ExchangeRates/ExchangeRates";








export default class App extends Component {

  dataObg = data =>{
    console.log(data)
  }

  render() {
   
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates onSave ={this.dataObg} />
      </div>
    );
  }
}
