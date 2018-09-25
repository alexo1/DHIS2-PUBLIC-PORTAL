import React, {Component} from 'react';




class AppSection extends Component{

    render(){
        const {title}=this.props;
        const {placeholder}=this.props;
        return(
            <div className="form-group add-form">
            <label for="exampleFormControlInput1">{title}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={placeholder}/>
        </div>
        )
    }
}

export default AppSection;