import React from "react";
function Show({ data }) {
  return (
    <>
      <div className="container mt-3">
        <h3>Name is : {data.name}</h3>
        <h3>Age is : {data.age}</h3>
        <h3>Number is : {data.number}</h3>
        <h3>Email is : {data.email}</h3>
        <h3>Address is : {data.address}</h3>
      </div>
    </>
  );
}

export default Show;
