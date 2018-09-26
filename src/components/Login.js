import React, { Component } from "react";
import "./form.css";

class Login extends Component {
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
            "https://play.dhis2.org/2.30/api/organisationUnitGroupSets.json?paging=false&fields=name,organisationUnitGroups[name,organisationUnits[name]]",
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
    render() {
        //console.log(this.state);

        const mystyle = {
            padding: "15px"
        };
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 " />
                        <div className="col-lg-4  col-here">
                            <form
                                className="form-login"
                                style={mystyle}
                                onSubmit={this.onLog.bind(this)}>
                            
                                <div className="header">
                                    {" "}
                                    <h2>Login Page</h2>
                                </div>
                                <div className="textbox">
                                    <input
                                        name="username"
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={this.handlechange}
                                    />
                                    <br />

                                    <br />
                                </div>
                                <div className="textbox">
                                    <input
                                        name="password"
                                        placeholder="password"
                                        type="Password"
                                        value={this.state.password}
                                        onChange={this.handlechangepassword}
                                    />
                                </div>

                                <br />
                                <br />
                                <div className="button">
                                    <input
                                        className="btn btn-success buton"
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4" />
                </div>
            </div>
        );
    }
}

export default Login;
