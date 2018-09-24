import React, {Component} from 'react';

import LoginGroup from './LoginGroup';
import Navbar from './Navbar';



class Login extends Component{
    render(){
        return(
        
           <div>
               <Navbar/>

             <div className="container">
               <div className="row">
               

                <LoginGroup/>
               
               </div>
              
               </div>
           </div>
                
                
         




        )
    }
}

export default Login;