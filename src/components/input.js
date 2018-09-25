import React, {Component} from 'react';
import InputGroup from './InputGroup'


class Input extends Component{

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
        .then(parsedJSON=>parsedJSON.organisationUnits.map(organisationUnit=>(
            {

            orgUnitId: `${organisationUnit.id}`,
            orgUnitName: `${organisationUnit.displayName}`

        }
    )))
        .then(regions=>this.setState({regions}))
        .catch(error=>console.log('parsed error', error))

        

       }

  
    render(){
        
        const {regions}  =this.state;
        
        const selectList=regions.map(region=>{
            return {value:region.OrgUnitId,label:region.orgUnitName}
      });

      const options = [

        {
            label: 'Days', options: [
                { label: 'Today', value: 'Today' },
                { label: 'Yesterday', value: 'Yesterday' },
                { label: 'Last 3 Days', value: 'Last 3 Days' },
                { label: 'Last 7 Days', value: 'Last 7Days' },
                { label: 'Last 14 Days', value: 'Last 14 Days' }
               
            ]
        },
        {
            label: 'Weeks', options: [
                { label: 'This Week', value: 'This Week' },
                { label: 'Last Week', value: 'Last Week' },
                { label: 'Last 4 Weeks', value: 'Last 4 Weeks' },
                { label: 'Last 12 Weeks', value: 'Last 12 Weeks' },
                { label: 'Last 52 Weeks', value: 'Last 52 Weeks' }
            ]
        },
        {
            label: 'Months', options: [
                { label: 'This Month', value: 'This Month' },
                { label: 'Last Month', value: 'Last Month' },
                { label: 'Last 3 Months', value: 'Last 3 Months' },
                { label: 'Last 6 Months', value: 'Last 6 Months' },
                { label: 'Last 12 Months', value: 'Last 12 Months' }
            ]
        },
        {
            label: 'Quarters', options: [
                { label: 'This Quarter', value: 'This Quarter' },
                { label: 'Last Quarter', value: 'Last Quarter' },
                { label: 'Last 4 Quarter', value: 'Last 4 Quarter' },
                { label: 'Quarters this Year', value: 'Quarters this Year' }
            ]
        },
        {
            label: 'Years', options: [
                { label: 'This Year', value: 'This Year' },
                { label: 'Last Year', value: 'Last Year' },
                { label: 'Last 5 Years', value: 'Last 5 Years' }
            ]
        },
       
        // { value: 'Days', label: 'Days' },
        // { value: '  weeks', label: 'Weeks' },
        // { value: 'Months', label: 'Months' },
        // { value: 'BiMonths', label: 'BiMonths' },
        // { value: 'Quarters', label: 'Quarters' },
        // { value: 'Months', label: 'Months' },
        // { value: 'Six-Months', label: 'Six-Months' },
        // { value: 'Financial Years', label: 'Financial Years' },
        // { value: 'Years', label: 'Years' }
      ];

        return(
        
            <div className="inputs">
                <div className="container">
                 <div className="row">
                 <div className="col-6">

                 <InputGroup name="Period" data={options}/>
                 
                 </div>
                 <div className="col-6">

                 <InputGroup name="Organisation Unit" data={selectList}/>

                 </div>
                 </div>
                </div>
              
            </div>

        )
    }

}

export default Input;