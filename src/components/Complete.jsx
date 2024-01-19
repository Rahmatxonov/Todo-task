import React, { useState } from "react";

export default function Complete() {
  const [count, setCount] = useState(0);

  const add = () => {
    console.log("Button clicked!");
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open</h1>
            </div>
            <div className="card-body">
              <p>Clicked: {count} times</p>
            </div>
            <div className="card-footer">
              <button onClick={add}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
