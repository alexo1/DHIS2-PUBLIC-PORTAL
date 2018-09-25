import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavItems extends Component{


  constructor(props){
      super(props);
      this.state = {
          indicators: []
      }
  }

  componentDidMount() {

      this.fetchdata();

     }



     fetchdata(){

     this.setState({
          regions: []
      })

      const headers ={
          headers:{
              'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
      }
      }



      fetch('http://197.136.81.99:8082/test/api/indicators',headers)
      .then(response =>response.json())
      .then(parsedJSON=>parsedJSON.indicators.map(indicator=>(
          {

          indicatorId: `${indicator.id}`,
          indicatorName: `${indicator.displayName}`

      }
  )))
      .then(indicators=>this.setState({indicators}))
      .catch(error=>console.log('parsed error', error))

     }


   render(){
    const {indicators}  =this.state;
       return(

      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav navItems" id="align-right">
          <li className="nav-item active">
            <Link className="nav-link " to={"/dashboard"}  activeStyle={{color:"red"}}>Dashboard</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Indicators</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {


            indicators.map(indicator=>{
            return   <a className="dropdown-item" href="#" key={indicator.indicatorId}>{indicator.indicatorName}</a>
            })

        }

        </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Downloads</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">News</a>
          </li>
          <li className="nav-item">
          <Link to={"/Login"} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Login</Link>
          </li>
          <li className="nav-item">
          <Link to={"/Linker"} class="nav-link" aria-pressed="true">API data</Link>
          </li>
        </ul>
      </div>
      </div>
       )
   }


}

export default NavItems;
