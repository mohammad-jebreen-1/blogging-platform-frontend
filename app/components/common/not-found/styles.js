import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  color: #343a40;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #dc3545; // Red color for 404
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.25rem;
  color: #6c757d; // Subtle grey color
  margin-top: 0;
  font-weight: 400;
`;
