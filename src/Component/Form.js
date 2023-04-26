import React ,{useState}from "react";
const Form=()=>{
  const[status,setStatus]=useState(true)
  return (
    <>
     {
      status? <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>:null
     }
      <button type="submit" className="btn btn-primary" onClick={()=>setStatus(true)}>
          Submit
        </button>
    </>
    
  );
}

export default Form