import Image from "next/image";
import styled from "@emotion/styled";

export const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    min-width: 250px;
    height: auto;
  }
`;
