import React, { useEffect, useState } from "react";
import ErrorText from "../error-text/index";
import {
  Container,
  Wrapper,
  StyledInput,
  Label,
  ShowHideIcon,
  ShowHideIconSlash,
} from "./styles";

const Input = ({ label, value, onChange, type, name, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (type === "password" && showPassword) {
      setInputType("text");
    } else {
      setInputType(type);
    }
  }, [showPassword, type]);

  const togglePasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordIcon = () => {
    return showPassword ? (
      <ShowHideIconSlash onClick={togglePasswordIcon} />
    ) : (
      <ShowHideIcon onClick={togglePasswordIcon} />
    );
  };

  return (
    <Container>
      <Wrapper>
        <StyledInput
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <Label>{label}</Label>
        {type === "password" && renderPasswordIcon()}
      </Wrapper>
      {error && <ErrorText text={error} />}
    </Container>
  );
};

export default Input;
