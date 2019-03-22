import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");

class App extends Component {
state = {
  success: false
}
//Instructor demo
componentDidMount(){
  axios.get("/api")
  .then(({data})=>{
    this.setState({
      success: data.success
    })
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
