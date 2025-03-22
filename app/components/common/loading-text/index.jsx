import React from "react";
import { StyledLoadingText } from "./styles";

const LoadingText = ({ text, ...props }) => {
  return <StyledLoadingText {...props}>{text}</StyledLoadingText>;
};

export default LoadingText;
