import React, {Component} from 'react';

import {Link} from "react-router-dom";
import InputGroup from './InputGroup'
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';




class NavItems extends Component{


  constructor(props){
      super(props);
      this.state = {
          indicators: [],

      }
  }

  componentDidMount() {

      this.fetchdata();

     }

     handleChange = (selectedOption) => {
        
      

      this.setState({ selectedOption});
      console.log(`Selected: ${selectedOption.value}`);
     
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

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const {indicators}  =this.state;
    const options= indicators.map(indicator=>{
      return  {value:indicator.indicatorId,label:indicator.indicatorName}
      })
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

          <li className="nav-item active mydrop">
          <InputGroup name="Select Indicators"data={options} indicator={value}/>
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

          <Link to={"/Linker"} class="nav-link" aria-pressed="true">API Data</Link>

          </li>
        </ul>
      </div>
      </div>
       )
   }


}

export default NavItems;
