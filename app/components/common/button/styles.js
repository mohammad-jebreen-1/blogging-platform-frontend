import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border: none;
  background-color: #24a0ed;
  color: #fff;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  display: grid;
  place-items: center;

  &:hover {
    background-color: #1f5c7f;
  }
`;
