import { StyledImage } from "./styles";

const Image = ({ imagePath, alt, ...props }) => {
  return (
    <StyledImage
      src={`http://localhost:3500/${imagePath}`}
      alt={alt}
      width={500}
      height={500}
      {...props}
    />
  );
};

export default Image;
