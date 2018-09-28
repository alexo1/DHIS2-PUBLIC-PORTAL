import React ,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import MyButton from './Button';







class Chat extends Component{
    constructor(props){
        super(props);
            this.state={
                chartData:props.chartData,
                name:'Bar'

        }
    }

    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
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

    }

    
    render(){
        console.log(this.state.name);
        let type=this.state.name;
        console.log(type);

        return(
            <div>
                <div className="container">
                <Bar
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                   title:{
                       display:this.props.displayTitle,
                       text:'Malaria Cases in Kenya',
                       fontSize:25

                   },
                   legend:{
                       display:this.props.displayLegend,
                       position:this.props.legendPosition
                   }
                }}
                />
                
                <MyButton name="Bar Graph"/>
                <MyButton name="Line Graph"/>
                <MyButton name="Pie Chart"/>
              
               
                </div>

          {/* <div className="container">
                <Pie
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                   title:{
                       display:this.props.displayTitle,
                       text:'Hiv Infection Among Kenyan Population',
                       fontSize:25

                   },
                   legend:{
                       display:this.props.displayLegend,
                       position:this.props.legendPosition
                   }
                }}
                />
                
                <MyButton name="Bar Graph"/>
                <MyButton name="Line Graph"/>
                <MyButton name="Pie Chart"/>
              
               
                </div>
                  */}

           
            
              
                
               
               

            </div>
          
        )
    }
}
export default Chat;