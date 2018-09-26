import React, { Component } from 'react';
import './form.css';



 



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };
    //store submited credentials
    handlechange =event => {
        this.setState({username:event.target.value});
        
    };
    handlechangepassword = event => {
        this.setState({ password: event.target.value });
        
    };
    
  

    handleSubmit = (event) => {

        const username= this.State.props.username;
        const password =this.State.props.password; 


        event.preventDefault();
        // Pulling datasets via API
         const headers = { method: "Get", headers: { Authorization: "Basic " + btoa(username + ":" + password) } };
    

        fetch("https://play.dhis2.org/2.30/api/organisationUnitGroupSets.json?paging=false&fields=name,organisationUnitGroups[name,organisationUnits[name]]", headers)
          
        .then(function deal(data) {
            if (data.status === 401) {
              alert("Login with your dhis2 credentials");
            } else {
              console.log(data);
            
            }
            console.log();
          })
          .catch(error => {
            console.log("Error", error);
          }); 
    }
    

    render() {

        console.log(this.state);

        const mystyle = {
            padding: '15px'
        };
        return (
            <div>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 "></div>
                        <div className="col-lg-4  col-here">
                            <form className="form-login" style={mystyle}>
                                <div className="header"> <h2>Login Page</h2></div>
                                <div className="textbox">

                                    <input
                                        name="username"
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={this.handlechange.bind(this)} />
                                    <br />

                                    <br />
                                </div>
                                <div className="textbox">

                                    <input
                                        name="password"
                                        placeholder="password"
                                        type="Password"
                                        value={this.state.password}
                                        onChange={this.handlechangepassword.bind(this)} />
                                </div>

                                <br />
                                <br />
                                <div className="button">

                                    <input className="btn btn-success buton" onSubmit={e => this.onSubmit(e)} type="submit" value="Submit" />


                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        );
    }
}



export default Login;