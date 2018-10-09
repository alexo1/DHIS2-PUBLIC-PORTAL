import React, {Component} from "react";

import NavLayout from "./NavLayout";
import AddSection from "./AddSection"
import AddSelect from "./AddSelect";
import AddSave from "./AddSave";
// import Chat from './Chart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: black,
    },
});



class Add extends Component{


    constructor(){
        super();
        this.state={
          chartData:{}
        }
      }

      componentWillMount(){
          this.getchartData();
      }
      //function to get/fetch chart data

      getchartData(){
        //Ajax code goes here
        this.setState({
          chartData:{

              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ]
              }]


          }
        })
      }

    
    render(){
        const {value}=this.props
        return(
            <div>
             <NavLayout/>
             <AddSave/>
             <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
            <AddSection title="Title" placeholder="Enter dashboard title"/>
            <AddSection title="Description" placeholder="Enter dashboard description"/>
           
            </div>
            <div className="col-lg-6">
            <AddSelect/>
            </div>
            <div className="container" id="chart1"></div>
            {/* <Chat chartData={this.state.chartData}/> */}
            {/* <Chat /> */}
            <Grid item xs={6}>
                <Paper >Work Area</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper >Display Area</Paper>
            </Grid>
            </div>
            </div>
            </div>
           
        )
    }
}

export default Add;