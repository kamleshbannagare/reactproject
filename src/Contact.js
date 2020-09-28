import React from 'react';


const Contact = () => {
  return(
    <>

      <div className="container-fluid mb-5">
             <div className="row">
                  <div className="col-6 mx-auto">
                    <div className="row ">

      <form>
        
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">contact no.</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile no." />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
  </div>
  <br></br>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
</div>
    </>
  );
};

export default Contact;