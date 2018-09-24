import React,{Component} from "react";
import NavLayout from "./NavLayout";
import Search from "./Search";
import Aside from "./Aside";
import Chat from "./Chart";


class Admin extends Component {
    render(){
        return(
            <div>
                <NavLayout/>
                <div className="row">
                <div className="col-md-3">
                <Search/>
                <Aside DashboardTitle="Malaria"/>
                <Aside DashboardTitle="HIV/AIDS"/>
                <Aside DashboardTitle="Nutrition"/>
                <Aside DashboardTitle="Immunization"/>
                <Aside DashboardTitle="Antenatal Care"/>
                </div>
                <div className="col-md-9">
                   <Chat/>
                </div>
                <div id="mybutton">
                <button type="button" className="btn btn-primary feedback">Add new dashboard</button>
                </div>
                </div>
            </div>




        )
    }
}
export default Admin;