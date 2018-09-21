import React, { Component } from 'react';
import './form.css';

/* var headers = {
    headers:{
        'Authorization': `Basic ${btoa(username +':'+ password)}`
    }
}   
 */

function headers(username, password) {
    /* pass the username & password to headers */


    const headers = {
        headers: {
            'Authorization': `Basic ${btoa(username + ':' + password)}`
        }
    }
}





class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        // Pulling datasets via API
        const headers = {
            headers: {
                'Authorization': `Basic ${btoa('kenya:Last#2002')}`
            }
        }

        fetch('http://197.136.81.99:8080/training/api/dataSets?paging=false&fields=id,name,code,shortName,description,href',
            headers
        )
            .then(function deal(data) {



                if (data.status === 401) {
                    alert("Login with your dhis2 credentials")
                } else {
                    console.log(data)
                }
                console.log()
            }).catch((error) => { console.log('Error', error) })
    }

    render() {



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
                                        onChange={e => this.change(e)} />
                                    <br />

                                    <br />
                                </div>
                                <div className="textbox">

                                    <input
                                        name="password"
                                        placeholder="password"
                                        type="Password"
                                        value={this.state.password}
                                        onChange={e => this.change(e)} />
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
/*
fetch('https://play.dhis2.org/2.30/api/organisationUnitGroupSets.json?paging=false&fields=name,organisationUnitGroups[name,organisationUnits[name]]', headers
).then((fetchData) => fetchData.json()).then((jsonData) => {
    (
        {/*ReactDOM.render(<header datasets={jsonData.dataSets}/>, rootElement); }


            .then(() => console.log('successful signin!')))

}).catch((error) => { console.log('Error', error) });
*/


export default Login;