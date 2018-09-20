import React, {Component} from 'react';
import Login from './Login'

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
              'Authorization': `Basic ${btoa('kenya:Last#2002')}`
      }
      }



      fetch('http://197.136.81.99:8080/training/api/indicators',headers)
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
            <a className="nav-link " href="#">Dashboard</a>
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
        </ul>
      </div>
      </div>
       )
   }


}

export default NavItems;
