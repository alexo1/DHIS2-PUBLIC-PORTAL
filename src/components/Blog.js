import React, {Component} from 'react';

import NavItems from './Nav'


class Blog extends Component {

fileChangedHandler=(event)=>{
  const file =event.target.files[0]
}
uploadHandler =(event)=>{ 
  const file =event.target.files[0]}


  render(){


return(
  <div class="col-lg-7">


  <form class ="form-control">
    <legend></legend>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />
    <small id="emailHelp" class="form-text text-muted">This is your post title</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">message</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="message" />


</div>
<div class="">
  <button id="btnSearch" class="btn btn-success btn-lg btn-block"  OnClick={this.uploadHandler} >Send <span class="glyphicon glyphicon-message"></span></button>


</div>
<br />



<div class="row">
    <div class="col-sm-6 ">

           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="inputGroupFileAddon01">upload</span>
             </div>
             <div class="custom-file">
               <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange={this.fileChangedHandler}       />
               <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
             </div>
           </div>


 </div>
</div>


</form>

</div>

        

    )
  }
}

export default Blog;
