import React from "react";

const Component = props => {
  return (
    <div className="hello world">
      <h1>Hello</h1>
      <h2>{props.string}</h2>
    </div>
  );
};

export default Component;
