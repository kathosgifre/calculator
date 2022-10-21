import React from "react";
import buttonClear from "../styles/buttonClear.css";

const ButtonClear = (props) => (
  <div className="button-clear" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ButtonClear;
