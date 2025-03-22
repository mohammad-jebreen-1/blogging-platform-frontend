import styled from "@emotion/styled";
import Image from "../../common/image";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  overflow-x: auto; /* Enable horizontal scroll */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  table-layout: auto; /* Ensure content can overflow and trigger horizontal scroll */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const Th = styled.th`
  background: #f4f4f4;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  vertical-align: middle; /* Vertical alignment fix */
`;

export const BlogImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const DeleteButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #d93636;
  }
`;

export const ViewButton = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #1976d2;
  }
`;

export const EditButton = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: #ff9800;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #f57c00;
  }
`;

export const ActionButton = styled.button`
  padding: 8px 12px;
  margin: 5px;
  display: flex;
  align-items: center;
  background-color: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #1976d2;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CreateButton = styled.button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #388e3c;
  }
`;
