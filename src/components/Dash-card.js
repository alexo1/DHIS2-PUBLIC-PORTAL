import React, {Component} from 'react';
import {Nairobi} from "../Nairobi.png";



class DashCard extends Component{
    render(){
        const {title}=this.props;
        return(
            <div>
                <div className="card bg-light text-blue dash-card">
                <img className="card-img" src={Nairobi} alt=""/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                </div>
                </div> 
            </div>
        )
    }
}

export default DashCard;