import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';

import './App.css';

class App2 extends Component {
  render() {
    return (
      <div className="body">

        <Navbar/>
        <Login/>
       
      </div>
    );
  }
}

export default App2;