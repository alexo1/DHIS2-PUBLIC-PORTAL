import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class InputGroup extends Component{


   constructor(props){
       super(props);
       this.state = {
           regions: []
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



       fetch('http://197.136.81.99:8080/training/api/dataElements',headers)
       .then(response =>response.json())
       .then(parsedJSON=>parsedJSON.dataElements.map(dataElements=>(
           {

           dataElementsID: `${dataElements.id}`,
           dataElementDesc: `${dataElements.displayName}`

       }
   )))
       .then(regions=>this.setState({regions}))
       .catch(error=>console.log('parsed error', error))

      }

   render(){


       const { name }=this.props;
       const {regions}  =this.state;

       return(



        <div className="container-fluid" >

              <ListGroup>
              <ListGroupItem active>
              <ListGroupItemHeading>Data Elements</ListGroupItemHeading>
              <ListGroupItemText> Aggregated List of Data Elements</ListGroupItemText>
              </ListGroupItem>
               {
                              regions.map(region=>{
                              return <ListGroupItem key={region.dataElementsID }>{region.dataElementDesc }</ListGroupItem>

                              })
                          }

              </ListGroup>



        </div>


       )
   }
}
export default InputGroup;
