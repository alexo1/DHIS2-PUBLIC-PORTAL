import React,{Component} from 'react';
import './login.css';
import Navbar from './Navbar';

class Login extends Component{
    state={
        username:"",
        password:"",
    };
    change = e => {
        this.setState({
                [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const mystyle={
            padding:'15px'
        };
        return(

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
          onChange={e=>this.change(e)}/>
            <br/>
           
            <br/>
            </div>
            <div className="textbox">
            
          <input
          name="password"
          placeholder="password"
          type="Password"
          value={this.state.password}
          onChange={e=>this.change(e)}/>
          </div>
          
                <br/>
                <br/>
             <div className="button">   
          
          <input class="btn btn-success buton" onClick={e=>this.onSubmit(e)} type="submit" value="Submit"/>


          </div>
            </form>
            </div>
            </div>
            <div className="col-lg-4"></div>
            </div>
        );
    }
}
export default Login;