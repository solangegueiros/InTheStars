import React, { Component } from 'react'
import SendText from '../src/SendText'

import logo from "./logo.svg";
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Written in the stars</h1>
        </header>      
        <br/>
        <br/>        

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <SendText />
            </div>
          </div>
        </main>
        
        <br/>
        <br/>
      </div>
    );
  }
}

export default App

