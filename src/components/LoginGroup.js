import React, {Component}  from 'react';


class LoginGroup extends Component{
    
    render(){
        return(
             
            <div>
                <form>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                </form>
            </div>

        )
    }
}


export default LoginGroup;