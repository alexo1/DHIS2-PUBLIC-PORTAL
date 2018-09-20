//packages section
import React, { Component } from 'react';
import{BrowserRouter,Route,Switch} from "react-router-dom";

//components section
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

//style section
import './App.css';




class App extends Component {
 
  render() {
    return (
      

      <BrowserRouter>
    <Switch>

    <Route path={"/"} component={Home} exact/>
    <Route path={"/home"} component={Home}/>
    <Route path={"/dashboard"} component={Dashboard}/>
    <Route component={Error}/>

    </Switch>
      
      
     


      </BrowserRouter>
      // <div>



      //   <Navbar/>
      //   <Input/>

      //    <Chat chartData={this.state.chartData}/>

      //    <HiChart/>
       
      // </div>
    );
  }
}

export default App;
