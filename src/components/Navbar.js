import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';


class Navbar extends Component{

   
  
    render(){
       
       
       

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
                <Link className="navbar-brand" to={"/"}>DHIS2 PUBLIC PORTAL</Link>
                
                <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav navItems" id="align-right">
                <li className="nav-item active">
                    <Link className="nav-link " to={"/dashboard"}  activeStyle={{color:"red"}}>Dashboard</Link>
                </li>
               
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Downloads</a>
                </li>
                <li className="nav-item">
                    <Link to={"/Api-endpoint"} className="nav-link disabled" href="#">Api Endpoints</Link>
                </li>
                <li className="nav-item active mydrop">

                 <a className="nav-link disabled" href="#">News</a>
               
               </li>
                <li className="nav-item">
                <Link to={"/Login"} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Login</Link>
                </li>
                </ul>
            </div>
      </div>
            
                
                </nav>
            </div>
        )
    }
}

export default Navbar;