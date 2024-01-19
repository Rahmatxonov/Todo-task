import React, { useState } from "react";

export default function Inprog() {
  const [status, setStatus] = useState("In Progress");

  const add = () => {
    console.log("Button clicked!");
    setStatus("Completed");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">{status}</h1>
            </div>
            <div className="card-body">
              <p>This task is currently in progress.</p>
            </div>
            <div className="card-footer">
              <button onClick={add}>Complete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
