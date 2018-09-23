import React,{Component} from "react";


class AddSave extends Component{
    render(){
        return(
            <div className="add-save">
                <div className="alert alert-primary" role="alert">
                <div className="row">
                <div className="col-lg-9">
                <button type="button" class="btn btn-primary">Save</button>
                </div>
                <div className="col-lg-3">
                <a href="#" class="alert-link">Exit without Saving</a>
                
                </div>
                </div>
                  
                </div>
            </div>
        )
    }
}

export default AddSave;