import React from "react";
import { ErrorMsg } from "./styles";

const ErrorText = ({ text, ...props }) => {
  return <ErrorMsg {...props}>{text}</ErrorMsg>;
};

export default ErrorText;
