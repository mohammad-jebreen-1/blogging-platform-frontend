"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/auth-context";
import {
  NavContainer,
  LogoContainer,
  UserInfo,
  UserCircle,
  NavWrapper,
  NavLink,
} from "./styles";
import Button from "../common/button";
import axiosInstance from "../../lib/axios-instance";

const NavHeader = () => {
  const { user, setUser } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      setUser(null);
      router.push("/login");
    } catch (error) {}
  };

  if (!user) return;

  return (
    <NavContainer>
      <NavWrapper>
        <LogoContainer>
          <img src="/blog-logo.svg" alt="Logo" />
        </LogoContainer>
        <NavWrapper>
          <NavLink href="/dashboard" passHref>
            Dashboard
          </NavLink>
          <NavLink href="/blog/my-blogs" passHref>
            My Blogs
          </NavLink>
          <NavLink href="/blog/create" passHref>
            Create new blog
          </NavLink>
        </NavWrapper>
      </NavWrapper>
      <UserInfo>
        <UserCircle>{user?.email.charAt(0).toUpperCase()}</UserCircle>
        <Button title="Logout" onClick={handleLogout} />
      </UserInfo>
    </NavContainer>
  );
};

export default NavHeader;
