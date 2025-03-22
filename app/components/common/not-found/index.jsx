"use client";
import { Container, Heading, Message } from "./styles";

const NotFoundPage = () => {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
    </Container>
  );
};

export default NotFoundPage;
