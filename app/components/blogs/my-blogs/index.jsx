"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../../../lib/axios-instance";
import { useAuthContext } from "../../../context/auth-context";
import formatDate from "../../../lib/format-date";
import LoadingText from "../../common/loading-text";
import {
  TableContainer,
  Table,
  TableRow,
  Th,
  Td,
  BlogImage,
  ActionButton,
  CreateButton,
  DropdownMenu,
} from "./styles";

const MyBlogs = () => {
  const { user } = useAuthContext();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/blogs/user/${user.userId}`
        );

        setBlogs(response.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBlogs();
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axiosInstance.delete(`/api/blogs/${id}`);

      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {}
  };

  const handleView = (id) => {
    router.push(`/blog/${id}`);
  };

  const handleEdit = (id) => {
    router.push(`/blog/edit/${id}`);
  };

  const handleCreateBlog = () => {
    router.push("/blog/create");
  };

  if (loading) {
    return <LoadingText text="Page is loading"></LoadingText>;
  }

  const headers = ["Image", "Title", "Description", "Date", "Actions"];

  return (
    <TableContainer>
      {blogs.length === 0 ? (
        <CreateButton onClick={handleCreateBlog}>Create Blog</CreateButton>
      ) : (
        <Table>
          <thead>
            <TableRow>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <Td>
                  <BlogImage imagePath={blog.image} alt={blog.title} />
                </Td>
                <Td>{blog.title}</Td>
                <Td>{blog.description}</Td>
                <Td>{formatDate(blog.createdAt)}</Td>
                <Td>
                  <DropdownMenu>
                    <ActionButton onClick={() => handleView(blog.id)}>
                      <FaEye /> View
                    </ActionButton>
                    <ActionButton onClick={() => handleEdit(blog.id)}>
                      <FaEdit /> Edit
                    </ActionButton>
                    <ActionButton onClick={() => handleDelete(blog.id)}>
                      <FaTrashAlt /> Delete
                    </ActionButton>
                  </DropdownMenu>
                </Td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default MyBlogs;
