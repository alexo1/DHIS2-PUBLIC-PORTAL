// first

// import React, {Component} from 'react';
// import Select from 'react-select';
// import 'react-select-plus/dist/react-select-plus.css';




// class AddSelect extends Component{


//     constructor(props){
//         super(props);
//         this.state = {
           
//             charts: [],
//             reportTables:[],
//             reportTable:[],
//             options:[]
//         }
//     }
  
//     state={
//         selectedOption: null
//     }

//       //function to handle selected values

//       handleChange = (selectedOption) => {
        
//         const headers ={
//             headers:{
//                 'Authorization': `Basic ${btoa('hi4kenya2018:Kenya#2018')}`
//         }
//         }

//         this.setState({ selectedOption});
//         console.log(`Selected: ${selectedOption.value}`);

        

       

//         // fetching data dimensions for selected item
//          fetch('https://hiskenya.org/api/charts/'+ selectedOption.value +'',headers)
//          .then(response=>response.json())
//          .then(parsedJson=>{
//              console.log(parsedJson)
//              console.log(parsedJson.periods[0].id)
//              console.log(parsedJson.organisationUnits[0].id)
//              return parsedJson
//          })
//         .then(reportTable=>console.log(this.setState({reportTable}))

        
        
//         )
//         .catch(
            
//             fetch('https://hiskenya.org/api/reportTables/'+ selectedOption.value +'',headers)
//             .then(response =>console.log(response.json()))
//             .then(parsedJSON=> {

//                 console.log(parsedJSON)
//             }        
            
//         )
//             .then(reportTable=>console.log(this.setState({reportTable}))
    
            
            
//             )
//             .catch(error=>console.log('parsed error', error))

//         )


//         //fetching the analytics api with the gotten dimentions
//         fetch('https://hiskenya.org/api/analytics/dimension:'+selectedOption.value+'',headers)
//             .then(response =>response.json())
//             .then(parsedJSON=>parsedJSON.response.map(reportTable=>(
//                 {
      
                
      
//             }
            
//         )))
//             .then(reportTable=>console.log(this.setState({reportTable}))
    
            
            
//             )
//             .catch(error=>console.log('parsed error', error))
//       }
    
//     componentDidMount() { 
        
//         this.fetchdata();
  
//        } 
  
     
    
//        fetchdata(){
  
//        this.setState({
//             charts: []
//         })
  
//         const headers ={
//             headers:{
//                 'Authorization': `Basic ${btoa('hi4kenya2018:Kenya#2018')}`
//         }
//         }
  
       
         
//         fetch('https://hiskenya.org/api/charts',headers)
//         .then(response =>response.json())
//         .then(parsedJSON=>parsedJSON.charts.map(chart=>(
//             {
  
//             chartId: `${chart.id}`,
//             chartName: `${chart.displayName}`
  
//         }
//     )))
//         .then(charts=>this.setState({charts}))
//         .catch(error=>console.log('parsed error', error))

//         //fetching pivot tables  
//         fetch('https://hiskenya.org/api/reportTables',headers)
//         .then(response =>response.json())
//         .then(parsedJSON=>parsedJSON.reportTables.map(reportTable=>(
//             {
  
//             reportTableId: `${reportTable.id}`,
//             reportTableName: `${reportTable.displayName}`
  
//         }
//     )))
//         .then(reportTables=>this.setState({reportTables}))
//         .catch(error=>console.log('parsed error', error))

    
  
//        }
   



//     render(){

    
//         const {charts}=this.state
//         const {reportTables}=this.state
//         const { name }=this.props;  
//         const { selectedOption } = this.state;
//         // const value = selectedOption && selectedOption.value;
//         const data= charts.map(chart=>{
             
//             return {value:chart.chartId,label:chart.chartName}
            
//       })
//       const data2=reportTables.map(reportTable=>{
               
//         return {value:reportTable.reportTableId,label:reportTable.reportTableName}
        
//   })
        
       
//       const options = [

//         {
//             label: 'Charts', options:data
//         },
//         {
//             label: 'Pivot Tables', options:data2
//         } 

//     ]
//         return(
//             <div className="add-form">
//             <label for="exampleFormControlInput1">Choose item to add</label>
//                 {/* <span class="input-group-text" id="inputGroup-sizing-default">{name}</span> */}
//                 <Select
//                     name={name}
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     options={options}
//                     // isMulti={true}
                    
//                 />
//             </div>
//         )
//     }
// }
// export default AddSelect;














// Second


import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';
import { Link } from "react-router-dom";
import { Card, Button, CardHeader, CardText, CardBody } from "reactstrap";
import Collapsible from "react-collapsible";
import FilteredMultiSelect from "react-filtered-multiselect";
import "bootstrap/dist/css/bootstrap.min.css";



class AddSelect extends Component{


    constructor(props){
        super(props);
        this.state = {
           
            charts: [],
            reportTables:[],
            reportTable:[],
            options:[],

            //selected option state
            Selected: [],
            selectedOptions: [],
            SelectedData: []
    
        }
    }
  
    state={
        selectedOption: null
    }

      //function to handle selected values

      handleChange = (selectedOption) => {
        
        const headers ={
            headers:{
                'Authorization': `Basic ${btoa('hi4kenya2018:Kenya#2018')}`
                
        }
        }

        //control classes
        const BOOTSTRAP_CLASSES = {
            filter: "form-control",
            select: "form-control",
            button: "btn btn btn-block btn-default",
            buttonActive: "btn btn btn-block btn-primary"
        };

        this.setState({ selectedOption});
        console.log(`Selected: ${selectedOption.value}`);

        

       

        // fetching data dimensions for selected item
         fetch('https://hiskenya.org/api/charts/'+ selectedOption.value +'',headers)
         .then(response=>response.json())
         .then(parsedJson=>{
             console.log(parsedJson)
             console.log(parsedJson.periods[0].id)
             console.log(parsedJson.organisationUnits[0].id)
             return parsedJson
         })
        .then(reportTable=>console.log(this.setState({reportTable}))

        
        
        )
        .catch(
            
            fetch('https://hiskenya.org/api/reportTables/'+ selectedOption.value +'',headers)
            .then(response =>console.log(response.json()))
            .then(parsedJSON=> {

                console.log(parsedJSON)
            }        
            
        )
            .then(reportTable=>console.log(this.setState({reportTable}))
    
            
            
            )
            .catch(error=>console.log('parsed error', error))

        )


        //fetching the analytics api with the gotten dimentions
        fetch('https://hiskenya.org/api/analytics/dimension:'+selectedOption.value+'',headers)
            .then(response =>response.json())
            .then(parsedJSON=>parsedJSON.response.map(reportTable=>(
                {
      
                
      
            }
            
        )))
            .then(reportTable=>console.log(this.setState({reportTable}))
    
            
            
            )
            .catch(error=>console.log('parsed error', error))
      }
    
    componentDidMount() { 
        
        this.fetchdata();
  
       } 
  
     
    
       fetchdata(){
  
       this.setState({
            charts: []
        })
  
        const headers ={
            headers:{
                'Authorization': `Basic ${btoa('hi4kenya2018:Kenya#2018')}`
        }
        }
  
       
         
        fetch('https://hiskenya.org/api/charts',headers)
        .then(response =>response.json())
        .then(parsedJSON=> {  
           const sData = parsedJSON.charts.map(chart=>(
            {
  
            chartId: `${chart.id}`,
            chartName: `${chart.displayName}`
  
        }
    ))
            console.log ( "this is sData" + sData);
            
})
        .then(charts=>this.setState({charts}))
        .catch(error=>console.log('parsed error', error))

        //fetching pivot tables  
        fetch('https://hiskenya.org/api/reportTables',headers)
        .then(response =>response.json())
        .then(parsedJSON=>parsedJSON.reportTables.map(reportTable=>(
            {
  
            reportTableId: `${reportTable.id}`,
            reportTableName: `${reportTable.displayName}`
  
        }
    )))
        .then(reportTables=>this.setState({reportTables}))
        .catch(error=>console.log('parsed error', error))

    
  
       }
   



    render(){

    
        const {charts}=this.state
        const {reportTables}=this.state
        const { name }=this.props;  
        const { selectedOption } = this.state;
        // const value = selectedOption && selectedOption.value;
        const data= charts.map(chart=>{
             
            return {value:chart.chartId,label:chart.chartName}
            
      })
      const data2=reportTables.map(reportTable=>{
               
        return {value:reportTable.reportTableId,label:reportTable.reportTableName}
        
  })
        
       
      const options = [

        {
            label: 'Charts', options:data
        },
        {
            label: 'Pivot Tables', options:data2
        } 

    ]
        return(
            <div className="add-form">
            <label for="exampleFormControlInput1">Choose item to add</label>
                {/* <span class="input-group-text" id="inputGroup-sizing-default">{name}</span> */}
                <Select
                    name={name}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    // isMulti={true}
                    
                />

                <Collapsible trigger="Indicators">
                    <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Add"
                        // classNames={BOOTSTRAP_CLASSES}
                        onChange={this.handleSelect}
                        options={Selected}
                        selectedOptions={selectedOptions}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                    <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Remove"
                        classNames={{
                          filter: "form-control",
                          select: "form-control",
                          button: "btn btn btn-block btn-default",
                          buttonActive: "btn btn btn-block btn-danger"
                        }}
                        onChange={this.handleDeselect}
                        options={selectedOptions}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                  </Collapsible>


            </div>
        )
    }
}
export default AddSelect;


