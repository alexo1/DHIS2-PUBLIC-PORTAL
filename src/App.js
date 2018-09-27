//packages section
import React, { Component } from 'react';
import{BrowserRouter,Route,Switch} from "react-router-dom";

//components section
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import Error from './components/Error';
import Admin from './components/Admin';
import Add from './components/Add';
import Linker from './components/Linker'
import Blog from './components/Blog'

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
    <Route path={"/login"} component={Login}/>
    <Route path={"/admin"} component={Admin}/>
    <Route path={"/add"} component={Add}/>
    <Route path={"/Linker"} component={Linker}/>
    <Route path={"/blog"} component={Blog}/>
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
