import React from "react";

import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
