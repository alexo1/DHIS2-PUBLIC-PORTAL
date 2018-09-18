import React, {Component} from 'react';
import NavItem from './Nav';


class Navbar extends Component{
    render(){

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
                <a className="navbar-brand" href="#">Navbar</a>
                
                <NavItem/>
            
                
                </nav>
            </div>
        )
    }
}

export default Navbar;