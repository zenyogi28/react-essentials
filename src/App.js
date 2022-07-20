import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
      // <>
      // {/* <div className="App">
      //   <h1>Hello, React!</h1>
      // </div> */}
      <div className="Container">
        <Table characterData={characters} />
      </div>
      // </>
    ) // return inside render
  } // render method
} // class end

export default App;
