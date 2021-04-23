import React from "react";
const DemOutput = (props) => {
  console.log("demo component");
  return <p>{props.show ? "this is new" : ""}</p>;
};

export default React.memo(DemOutput);
