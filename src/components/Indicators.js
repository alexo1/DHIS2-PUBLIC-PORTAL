import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ReactToExcel from 'react-html-table-to-excel'


class Indicators extends Component{


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
               'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
       }
       }



       fetch('http://197.136.81.99:8082/test/api/indicators',headers)
       .then(response =>response.json())
       .then(parsedJSON=>parsedJSON.indicators.map(indicators=>(
           {

           indicatorsID: `${indicators.id}`,
           indicatorsShortname: `${indicators.code}`,
           indicatorsName: `${indicators.displayName}`

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

            {
              /*  <ListGroup>
              <ListGroupItem active>
              <ListGroupItemHeading>Indicators</ListGroupItemHeading>
              <ListGroupItemText> indicators available in DHIS2</ListGroupItemText>
              </ListGroupItem>
               {
                              regions.map(region=>{
                              return <ListGroupItem key={region.indicatorsID }>{region.indicatorsName }</ListGroupItem>
                              })
                          }
              </ListGroup>
              */}



              <ReactToExcel
                table="org"
                filename="Indicators"
                sheet="sheet 1"
                buttonText="Export to Excel"
               />

                                      <table class="table table-bordered table-striped" id="org">
                                        <thead class="thead-dark">
                                          <tr>
                                            <th scope="col">#ID</th>

                                            <th scope="col">Indicator Name</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                          regions.map(region=>{

                                          return<tr>

                                          <td>{region.indicatorsID}</td>

                                          <td>{region.indicatorsName }</td>
                                          </tr>
                                          })
                                        }
                                        </tbody>
                                        </table>





        </div>


       )
   }
}
export default Indicators;