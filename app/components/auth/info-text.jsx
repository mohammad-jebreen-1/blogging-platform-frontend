import React from "react";
import { StyledInfoText, StyledLink } from "./styles";

const InfoText = ({ text, linkHref, linkTitle }) => {
  return (
    <div>
      <StyledInfoText>{text}</StyledInfoText>
      <StyledLink href={linkHref}>{linkTitle}</StyledLink>
    </div>
  );
};

export default InfoText;
