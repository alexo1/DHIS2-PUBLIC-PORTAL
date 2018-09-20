import React, {Component} from 'react';




class Error extends Component{
    render(){
        return(
        
            <div>
                <div className="container">
                <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Ooops!!! Page not found!</h4>
                <p>check the path name</p>
                <hr/>
                <p className="mb-0">Please stop being stupid!! haha!!</p>
                </div>
                
                </div>
            </div>




        )
    }
}

export default Error;