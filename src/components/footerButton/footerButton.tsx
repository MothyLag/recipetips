import React from "react";
import { IFooterButtonProps } from "./footerButton.interface";
import "./footerButton.css";

export const FooterButton = function(props: IFooterButtonProps) {
  return (
    <a className="fbutton">
      <b>{props.text}</b>
    </a>
  );
};
