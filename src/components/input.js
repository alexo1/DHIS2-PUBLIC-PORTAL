import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';


class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            regions: [],
            indicators:[],
            selectedOption: null,
            selectedOption2: null,
            selectedOption3: null,
           
        }
       
       
    }

      //function to handle selected values

      handleChange = (selectedOption) => {
        this.setState({ selectedOption});
        this.state.period= `${selectedOption.label}`;
        console.log(this.state.period)
        
      }
      
      handleChange2 = (selectedOption2) => {
        this.setState({ selectedOption2 });
        console.log(selectedOption2)
        this.state.orgunit=` ${selectedOption2.value}`;
        console.log(this.state.orgunit)
      }
      handleChange3 = (selectedOption3) => {
        this.setState({ selectedOption3 });
        console.log(selectedOption3)
        this.state.indicator=`${selectedOption3.value}`;
        // console.log(this.state.indicator)
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
        console.log(this.state.period)
        console.log(this.state.orgunit)
        console.log(this.state.indicator)

      console.log(this.state.selectedOption2)

      console.log(this.state.selectedOption)
      console.log(this.state.selectedOption3)
        const headers ={
            headers:{
                'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
        }
        }
         
        fetch('http://197.136.81.99:8082/test/api/analytics?dimension=dx:'+this.state.indicator+';&dimension=ou:'+this.state.orgunit+';&dimension=pe:2015;',headers)
        .then(response =>console.log(response.json()))
        .then(parsedJSON=>parsedJSON.headers.map(fetched=>(
            {

            data: `${fetched[0]}`,
            year: `${fetched[2]}`

        }
    )))
        .then(regions=>this.setState({regions}))
        .catch(error=>console.log('parsed error', error))





        const { name }=this.props;
        const { name2 }=this.props; 
        const { name3 }=this.props;
        const {regions}  =this.state;
        const { selectedOption } = this.state;
        const { selectedOption2 } = this.state;
        const { selectedOption3 } = this.state;
        const {indicators}  =this.state;
        const options2= indicators.map(indicator=>{
           return  {value:indicator.indicatorId,label:indicator.indicatorName}
           })
        
        
      const selectList=regions.map(region=>{
            return {value:region.orgUnitId,label:region.orgUnitName}
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
                <div className="container-fluid">
                 <div className="row">
                 <div className="col-4">

                 {/* <InputGroup name="Organisation Unit" data={selectList}/> */}
                 <Select
                    placeholder="Indicators"
                    name={name3}
                    value={selectedOption3}
                    onChange={this.handleChange3}
                    options={options2}
                
                />

                 </div>
                 <div className="col-4">

                 {/* <InputGroup name="Period" data={options}/> */}
                 <Select
                    placeholder="Period"
                    name={name}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                
                />
                 
                 </div>
                 <div className="col-4">

                 {/* <InputGroup name="Organisation Unit" data={selectList}/> */}
                 <Select
                    placeholder="Organisation Units"
                    name={name2}
                    value={selectedOption2}
                    onChange={this.handleChange2}
                    options={selectList}
                
                />

                 </div>
                 </div>
                </div>
              
            </div>

        )
    }

}

export default Input;