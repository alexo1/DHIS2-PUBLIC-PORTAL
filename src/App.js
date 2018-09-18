import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Input from './components/input';

import Chat from './components/Chart';

import './App.css';
import HiChart from './components/Hi';

class App extends Component {
  constructor(){
    super();
    this.state={
      chartData:{}
    }
  }
  
  componentWillMount(){
      this.getchartData();
  }
  //function to get/fetch chart data
  
  getchartData(){
    //Ajax code goes here
    this.setState({
      chartData:{
      
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ]
          }]

      
      }
    })
  }
  render() {
    return (
      <div className="body">

        <Navbar/>
        <Input/>

         <Chat chartData={this.state.chartData}/>

         <HiChart/>
    {/* <Login/>  */}
       
      </div>
    );
  }
}

export default App;
