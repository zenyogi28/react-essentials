import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      // <>
      // {/* <div className="App">
      //   <h1>Hello, React!</h1>
      // </div> */}
      <div className="Container">
        <Table />
      </div>
      // </>
    )
  }
}

export default App;
