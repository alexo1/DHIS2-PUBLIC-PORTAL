import React,{Component} from 'react';



class MyButton extends Component{

    render(){
        const { name }=this.props;
        return(
            <div className="my-button">
                <center>
                <button type="button" className="btn btn-success btn-sm">{name}</button>
                </center>
            </div>
        )
    }
}

export default MyButton;