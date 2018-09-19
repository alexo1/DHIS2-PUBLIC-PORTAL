import React,{Component} from "react";



class Search extends Component{
    render(){
        return(
            <div className="container">
                 <form className="search">
                    <fieldset className="form-group">
                    <input type="text" className="form-control form-control-lg my-search" placeholder="Search Dashboard" onChange={this.filterList}/>
                    </fieldset>
                    </form>
            </div>
        )
    }
}

export default Search;