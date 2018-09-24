import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';




class AddSelect extends Component{


    constructor(props){
        super(props);
        this.state = {
            charts: [],
            reportTables:[]
        }
    }
  
  

  
    state = {
        selectedOption: '',
      }

      //function to handle selected values

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
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
                'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
        }
        }
  
       
         
        fetch('http://197.136.81.99:8082/test/api/charts',headers)
        .then(response =>response.json())
        .then(parsedJSON=>parsedJSON.charts.map(chart=>(
            {
  
            chartId: `${chart.id}`,
            chartName: `${chart.displayName}`
  
        }
    )))
        .then(charts=>this.setState({charts}))
        .catch(error=>console.log('parsed error', error))

        //fetching pivot tables  
        fetch('http://197.136.81.99:8082/test/api/reportTables',headers)
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
        const value = selectedOption && selectedOption.value;
        const data= charts.map(chart=>{
               
            return {value:chart.reportTableId,label:chart.chartName}
            
      })
      const data2=reportTables.map(reportTable=>{
               
        return {value:reportTable.chartId,label:reportTable.reportTableName}
        
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
                    value={value}
                    onChange={this.handleChange}
                    options={options}
                    multi={true}
                />
            </div>
        )
    }
}
export default AddSelect;