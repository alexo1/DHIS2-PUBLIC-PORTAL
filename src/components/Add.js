import React, {Component} from "react";

import NavLayout from "./NavLayout";
import AddSection from "./AddSection"
import AddSelect from "./AddSelect";
import AddSave from "./AddSave";



class Add extends Component{
    render(){
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
            </div>
            </div>
            </div>
           
        )
    }
}

export default Add;