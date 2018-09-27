import React, {Component} from 'react';




class Blog extends Component {




  render(){


    const mystyle={
      textalign:'center',
    };


    return(
      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand" href="#">Blog</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">contact us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#">other news</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" style={mystyle}>
              <input class="form-control mr-sm-2" type="search" placeholder="what are you looking?" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>


  <div class="col-lg-6">

  <form>
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
{
// <div class="allg">
//
//   <button type="submit" class="btn btn-success">Submit</button>
//
//       <label for="exampleFormControlFile1">upload file</label>
//       <input type="file" class="form-control-file" id="exampleFormControlFile1"  />
// </div>
}

<div class="row">
    <div class="col-sm-12 ">
        <button id="btnSearch" class="btn btn-success btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >UPLOAD</button>
         <input type="file" class="form-control-file" id="exampleFormControlFile1" Style="width: 100px;" />
     </div>
</div>


</form>



        </div>
      </div>
    )
  }
}

export default Blog;
