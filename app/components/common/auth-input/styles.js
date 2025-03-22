import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;

  &:focus {
    border: 3px solid #1ca34d;
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: #1ca34d;
    transform: translateX(5px) translateY(-25px);
    background-color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
  }

  &:not(:focus) + span {
    color: #808080;
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: #7f8fa6;
  transition: 0.6s;
  pointer-events: none;
`;

export const ShowHideIcon = styled(BsEye)`
  position: absolute;
  right: 25px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.2rem; /* Adjust the icon size */
  cursor: pointer;
`;

export const ShowHideIconSlash = styled(BsEyeSlash)`
  position: absolute;
  right: 25px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.2rem; /* Adjust the icon size */
  cursor: pointer;
`;
