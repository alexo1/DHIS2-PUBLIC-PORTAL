import React, {Component} from 'react';
import NavItem from './Nav';
import {Link} from "react-router-dom";


class Navbar extends Component{
    render(){

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                
                <NavItem/>
            
                
                </nav>
            </div>
        )
    }
}

export default Navbar;