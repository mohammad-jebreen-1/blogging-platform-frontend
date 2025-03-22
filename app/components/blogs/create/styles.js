import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
  box-sizing: border-box;
  height: 150px;
  resize: vertical;
`;

export const ImageUploadContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 2px dashed #0070f3;
  border-radius: 8px;
  text-align: center;
  background-color: #f7faff;
  cursor: pointer;
`;

export const ImageUploadText = styled.p`
  font-size: 14px;
  color: #0070f3;
`;

export const SaveButton = styled.button`
  padding: 12px 20px;
  background-color: #0070f3;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;