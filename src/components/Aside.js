import React,{Component} from "react";



class Aside extends Component {
    render(){
        const {DashboardTitle}=this.props;
        return(
            
                <div className="container">
                
             <div className="dashbord-component">
             <a href="#" className="link1"><span></span></a>
               <h6>{DashboardTitle}</h6>
             
            </div>
            </div>
           
            
           




        )
    }
}
export default Aside;