import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#F0E68C"
};

const Window3 = () => (
  <Resizable
    style={style}
    defaultSize={{
      width: 300,
      height: 300
    }}
  >
    <h4> Component 3</h4>
  </Resizable>
);

export default Window3;
