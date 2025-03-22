import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 30%;
  min-height: 75%;
  padding: 0 1.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 64em) {
    width: 30%;
  }

  @media (min-width: 48em) and (max-width: 63.99em) {
    width: 50%;
  }

  @media (max-width: 47.99em) {
    width: 100%;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 1rem;
`;

export const StyledInfoText = styled.span`
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: #5eb4c8;
  align-self: flex-end;
  transition: all 0.5s;

  &:hover {
    color: #010606;
  }
`;
