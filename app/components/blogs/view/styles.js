import styled from "@emotion/styled";
import Image from "../../common/image";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BlogImage = styled(Image)`
  width: 100%;
  max-width: 900px;
  max-height: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
  }
`;

export const BlogInfo = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.p`
  font-size: 18px;
  color: gray;
`;

export const BlogDate = styled.p`
  font-size: 16px;
  color: #999;
`;

export const Description = styled.p`
  margin-top: 20px;
  line-height: 1.8;
  font-size: 18px;
  color: #555;
`;

export const CommentsSection = styled.div`
  margin-top: 40px;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

export const CommentItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const CommentAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0070f3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CommentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentAuthor = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const CommentText = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #555;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 20px;
  &:focus {
    border-color: #0070f3;
  }
`;

export const CommentButton = styled.button`
  padding: 12px 18px;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 12px;
  &:hover {
    background: #005bb5;
  }
`;

export const CommentDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;
