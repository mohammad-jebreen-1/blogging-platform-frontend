import React from "react";
import { StyledButton } from "./styles";

const Button = ({ title, type, onClick, ...props }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {title}
    </StyledButton>
  );
};

export default Button;
