import styled from "@emotion/styled";
import Link from "next/link";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FDF5E6;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  img {
    height: 40px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserCircle = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ca34d;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #005bb5;
  }
`;