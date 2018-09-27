import React, {Component} from 'react';
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



       fetch('http://197.136.81.99:8082/test/api/dataElements',headers)
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

              {/*<ListGroup>
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
            */}



            <ReactToExcel
              table="org"
              filename="DataElements"
              sheet="sheet 1"
              buttonText="Export to Excel"
             />

                                    <table class="table table-bordered table-striped" id="org">
                                      <thead class="thead-dark">
                                        <tr>
                                          <th scope="col">#ID</th>
                                          <th scope="col">DataElements Description</th>

                                        </tr>
                                      </thead>
                                      <tbody>
                                        {
                                        regions.map(region=>{

                                        return<tr>

                                        <td>{region.dataElementsID}</td>
                                        <td>{region.dataElementDesc}</td>

                                        </tr>
                                        })
                                      }
                                      </tbody>
                                      </table>
















        </div>


       )
   }
}
export default InputGroup;