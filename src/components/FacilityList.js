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
               'Authorization': `Basic ${btoa('kenya:Last#2002')}`
       }
       }



       fetch('http://197.136.81.99:8080/training/api/organisationUnitLevels',headers)
       .then(response =>response.json())
       .then(parsedJSON=>parsedJSON.organisationUnitLevels.map(organisationUnitLevels=>(
           {

           orgID: `${organisationUnitLevels.id}`,
           orgunitLevelDesc: `${organisationUnitLevels.displayName}`

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

            {/*  <ListGroup>
              <ListGroupItem active>
              <ListGroupItemHeading>organisation Unit Levels </ListGroupItemHeading>
              <ListGroupItemText></ListGroupItemText>
              </ListGroupItem>
               {
                              regions.map(region=>{
                              return <ListGroupItem key={region.orgID }>{region.orgunitLevelDesc }</ListGroupItem>

                              })
                          }

              </ListGroup> */}



              <ReactToExcel
                table="nini"
                filename="Facilities"
                sheet="sheet 1"
                buttonText="Export to Excel"
               />




<table class="table table-bordered table-striped" id="nini">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#ID</th>

      <th scope="col">OrganisationUnit level</th>
    </tr>
  </thead>
  <tbody>
    {
    regions.map(region=>{

    return<tr>

    <td>{region.orgID}</td>
    <td>{region.orgunitLevelDesc }</td>
    </tr>
    })
  }
  </tbody>
  </table>
  <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 2.4.0
      </div>
      <strong>Copyright &copy; 2018 <a href="https://github.com/NehemiahLimo">DHIS2</a>.</strong> All rights
      reserved.
    </footer>

        </div>


       )
   }
}
export default InputGroup;
