import React, {Component} from 'react';
import DashCard from './Dash-card';
import Navbar from './Navbar'
import Search from './Search'


class Dashboard extends Component{
    render(){

        return(
            <div>
                <Navbar/>
                <div className="container-fluid">
                <div className="row">
                <div col-8>
                <Search/>
                </div>
                </div>
                </div>
                
                <div className="container-fluid">
                <div className="row">
                <div className="col-lg-3">
                <DashCard title="Nairobi County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Kisumu County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Nakuru County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Mombasa County Dashboard"/>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-3">
                <DashCard title="Kajiado County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Kiambu County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Muranga County Dashboard"/>
                </div>
                <div className="col-lg-3">
                <DashCard title="Kitui County Dashboard"/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Dashboard;