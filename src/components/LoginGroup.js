import React, {Component}  from 'react';


class LoginGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleClick = this.handleClick;

        this.onLog = this.onLog;
    }
    //store submited credentials
    handlechange = event => {
        this.setState({ username: event.target.value });
    };
    handlechangepassword = event => {
        this.setState({ password: event.target.value });
    };
    onLog(event) {
        event.preventDefault();
        var username = this.state.username;
        var password = this.state.password;

        console.log(username + password);
        // Pulling datasets via API
        const headers = {
            headers: { Authorization: "Basic " + btoa(username + ":" + password) }
        };

        fetch(
            "http://197.136.81.99:8082/test/api/organisationUnitGroupSets.json?paging=false&fields=name,organisationUnitGroups[name,organisationUnits[name]]",
            headers
        )
            .then(function deal(data) {
                if (data.status === 401) {
                    alert("Login with your dhis2 credentials");
                } else {
                    //console.log(data);
                    //<a href="https//:facebook.com"></a>
                    alert("successful login");
                }
                //console.log();
            })
            .catch(error => {
                /* console.log("Error", error); */
            });


        }
    
    render(){
        return(
            
            <div className="col align-self-center login">
                <form onSubmit={this.onLog.bind(this)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"  value={this.state.username} onChange={this.handlechange}/>
                        <small id="emailHelp" className="form-text text-muted">Please use your DHIS2 Username and Password.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.handlechangepassword}/>
                    </div>
                     <div className="text-center">
                     <button type="submit" value="Submit" className="btn btn-primary login-button">Login</button>
                     </div>
                   
                    </form>
            </div>
          
        )
    }
}


export default LoginGroup;