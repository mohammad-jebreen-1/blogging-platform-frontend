import styled from "@emotion/styled";

export const NoBlogsMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const NoBlogsMessage = styled.h2``;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const BlogItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #f9f9f9;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BlogImage = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    min-width: 250px;
    height: auto;
  }
`;

export const BlogContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BlogTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const BlogMeta = styled.div`
  font-size: 14px;
  color: #777;
  margin: 5px 0;
`;

export const BlogDescription = styled.p`
  margin: 5px 0;
  color: #555;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
  }
`;

export const ViewButton = styled.button`
  margin-top: 8px;
  padding: 8px 12px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  align-self: flex-start;

  &:hover {
    background: #005bb5;
  }
`;
