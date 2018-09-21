import React,{Component} from "react";



class Aside extends Component {
    render(){
        const {DashboardTitle}=this.props;
        return(
            
                <div className="container">
                
             <div>
             <button type="button" className="btn btn-primary btn-lg dashbord-component">{DashboardTitle}</button>
              
             
            </div>
            </div>
           
            
           




        )
    }
}
export default Aside;