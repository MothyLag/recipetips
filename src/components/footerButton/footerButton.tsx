import React from "react";
import { IFooterButtonProps } from "./footerButton.interface";
import "./footerButton.css";

export const FooterButton = function(props: IFooterButtonProps) {
  return (
    <button
      form={props.form ? props.form : ""}
      className="fbutton"
      onClick={props.ButtonAction}
    >
      <b>{props.text}</b>
    </button>
  );
};
