import React, {Component} from 'react';

import LoginGroup from './LoginGroup';



class Login extends Component{
    render(){
        return(
        
            <div>
                <div className="container">
                <div className="row">
                <div className="card">
                 <div className="card-body">

                 <LoginGroup/> 
                 
                 </div>
                </div>
                </div>
                
                </div>
            </div>




        )
    }
}

export default Login;