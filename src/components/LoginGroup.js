import React, {Component}  from 'react';


class LoginGroup extends Component{
    
    render(){
        return(
            
            <div className="col align-self-center login">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                        <small id="emailHelp" className="form-text text-muted">Please use your DHIS2 Username and Password.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                     <div className="text-center">
                     <button type="submit" className="btn btn-primary login-button">Login</button>
                     </div>
                   
                    </form>
            </div>
          
        )
    }
}


export default LoginGroup;