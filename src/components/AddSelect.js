import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select-plus/dist/react-select-plus.css';




class AddSelect extends Component{


    constructor(props){
        super(props);
        this.state = {
           
            charts: [],
            reportTables:[],
            reportTable:[],
            options:[]
        }
    }
  
    state={
        selectedOption: null
    }

      //function to handle selected values

      handleChange = (selectedOption) => {
        
        const headers ={
            headers:{
                'Authorization': `Basic ${btoa('stevekahugu@gmail.com:Steve@95')}`
        }
        }

        this.setState({ selectedOption});
        console.log(`Selected: ${selectedOption.value}`);

        

       

        // fetching data dimensions for selected item
         fetch('http://197.136.81.99:8082/test/api/charts/'+ selectedOption.value +'',headers)
        .then(response =>console.log(response.json()))
        .then(parsedJSON=>parsedJSON.response.map(chart=>(
            {
                
            
            // getting the relevant dimensions
           
  
        }
        
    )))
        .then(reportTable=>console.log(this.setState({reportTable}))

        
        
        )
        .catch(
            fetch('http://197.136.81.99:8082/test/api/reportTables/'+ selectedOption.value +'',headers)
            .then(response =>console.log(response.json()))
            .then(parsedJSON=>parsedJSON.reportTables.map(reportTable=>(
                {
      
                //getting the relevant dimensions
      
            }
            
        )))
            .then(reportTable=>console.log(this.setState({reportTable}))
    
            
            
            )
            .catch(error=>console.log('parsed error', error))

        )


        //fetching the analytics api with the gotten dimentions
        fetch('http://197.136.81.99:8082/test/api/analytics/dimension:'+ selectedOption.value +'',headers)
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
            </div>
        )
    }
}
export default AddSelect;