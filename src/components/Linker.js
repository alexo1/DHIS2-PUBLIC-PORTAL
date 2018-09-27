import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import DataElements from './DataElements'


import Datasets from './Datasets'
import FacilityList from './FacilityList'

import Indicators from './Indicators'
import OrganisationUnits from './OrganisationUnits'




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.red,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Organisation Units" />
            <Tab label="Facilities" />
            <Tab label="Indicators" />
            <Tab label="Data Elements" />
            <Tab label="DataSets" />


            {/*<Tab label="Item Three" href="#basic-tabs" /> */}
          </Tabs>
        </AppBar>

        {value === 0 && <TabContainer><OrganisationUnits /></TabContainer>}
        {value === 1 && <TabContainer><FacilityList /></TabContainer>}
        {value === 2 && <TabContainer><Indicators /></TabContainer>}



        {value === 3 && <TabContainer><DataElements  /></TabContainer>}


        {value === 4 && <TabContainer><Datasets /></TabContainer>}

        {
          /*
        }{value === 5 && <TabContainer><Elemente /></TabContainer>}
        {value === 6 && <TabContainer><orgUni /></TabContainer>}
*/}

      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);