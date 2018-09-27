import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ReactToExcel from 'react-html-table-to-excel'


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
               'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
       }
       }



       fetch('http://197.136.81.99:8082/test/api/organisationUnits',headers)
       .then(response =>response.json())
       .then(parsedJSON=>parsedJSON.organisationUnits.map(organisationUnits=>(
           {

           orgunitID: `${organisationUnits.id}`,
           orgunitName: `${organisationUnits.displayName}`,
           orgcode: `${organisationUnits.code}`,
           orglink: `${organisationUnits.href}`,
          orgdescr: `${organisationUnits.description}`

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

           <div class="accordion" id="accordionExample">
{/*
 {
                            regions.map(region=>{
                            return (<div class="card">
                              <div class="card-header" id="">
                              <h5 class="mb-0"   >
                                 <button key={region.orgunitID}  class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                {region.orgunitName}
                          </button>
                                </h5>
                              </div>
                              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">orgunitID: {region.orgunitID} code:{region.orgunitName}  link: {region.orglink} orgdescr: {region.orgdescr}</div>
                            </div>
                            </div>
                          )
                            })
                        }
*/}

<ReactToExcel
  table="org"
  filename="Organisation Units"
  sheet="sheet 1"
  buttonText="Export to Excel"
 />

                        <table class="table table-bordered table-striped" id="org">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">#ID</th>
                              <th scope="col">OrganisationUnit Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                            regions.map(region=>{

                            return<tr>

                            <td>{region.orgunitID}</td>
                            
                            <td>{region.orgunitName }</td>
                            </tr>
                            })
                          }
                          </tbody>
                          </table>




           </div>
          {/**
              <ListGroup>
              <ListGroupItem active>
              <ListGroupItemHeading>organisationUnits</ListGroupItemHeading>
              <ListGroupItemText> List of organisationUnits</ListGroupItemText>
              </ListGroupItem>
               {
                              regions.map(region=>{
                              return <ListGroupItem key={region.orgunitID }>{region.orgunitName }</ListGroupItem>
                              })
                          }
              </ListGroup>
              */}


              
        </div>


       )
   }
}
export default InputGroup;