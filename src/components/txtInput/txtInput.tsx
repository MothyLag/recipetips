import React from "react";
import { InputProps } from "./txtInpu.interface";
import "./txtInput.css";
export const InputText = function(props: InputProps) {
  return (
    <div>
      <input
        name={props.name}
        placeholder={props.name}
        className="roundedInput"
        type={props.type ? props.type : "text"}
      />
    </div>
  );
};
