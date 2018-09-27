import React, {Component} from 'react';




class Blog extends Component {




  render(){


    const mystyle={
      textAlign:'center',
    };


    return(






  <div class="col-lg-7">


  <form class ="form-control"style={mystyle}>
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




<div class="row">
    <div class="col-sm-6 ">
        <button id="btnSearch" class="btn btn-success btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Post</button>
         <input type="file" class="form-control-file" id="exampleFormControlFile1" Style="width: 100px;" />

           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="inputGroupFileAddon01">upload</span>
             </div>
             <div class="custom-file">
               <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
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
