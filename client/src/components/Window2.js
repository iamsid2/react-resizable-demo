import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#90EE90"
};

const Window2 = () => (
  <Resizable
    style={style}
    defaultSize={{
      width: 300,
      height: 300
    }}
  >
    <h4> Component 2</h4>
  </Resizable>
);

export default Window2;
