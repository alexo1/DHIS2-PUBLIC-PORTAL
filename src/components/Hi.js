import React,{Component} from 'react';
var Highcharts = require('highcharts');


class HiChart extends Component{

    componentWillMount(){
        this.Chart();
    }

    
    Chart () { 
        var myChart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    };

    render(){
        return(
            <div>
             <div id="container"></div>
            </div>
        )
    }
}

export default HiChart;