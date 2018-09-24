import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Navbar extends Component{
    render(){

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                
               
            
                
                </nav>
            </div>
        )
    }
}

export default Navbar;