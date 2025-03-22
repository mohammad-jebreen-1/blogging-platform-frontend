"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axios-instance";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/auth-context";
import LoadingText from "../common/loading-text";
import Image from "../common/image";
import formatDate from "../../lib/format-date";
import {
  NoBlogsMessageWrapper,
  NoBlogsMessage,
  BlogContainer,
  BlogItem,
  BlogContent,
  BlogTitle,
  BlogDescription,
  BlogMeta,
  ViewButton,
  BlogImage,
} from "./styles";

const Dashboard = () => {
  const { user } = useAuthContext();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (user) {
          const response = await axiosInstance.get("/api/blogs");

          setBlogs(response.data);
          setLoading(false);
        }
      } catch (error) {}
    };

    fetchBlogs();
  }, [user]);

  if (loading || !user) {
    return <LoadingText text="Loading..." />;
  }

  if (blogs.length === 0) {
    return (
      <NoBlogsMessageWrapper>
        <NoBlogsMessage>
          No blogs for now. You may consider creating a blog. Check the create
          blog tab.
        </NoBlogsMessage>
      </NoBlogsMessageWrapper>
    );
  }

  return (
    <BlogContainer>
      {blogs.map((blog) => (
        <BlogItem key={blog.id}>
          <BlogImage>
            <Image imagePath={blog.image} alt={blog.title} />
          </BlogImage>
          <BlogContent>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogMeta>
              By {blog.author.email} • {formatDate(blog.createdAt)}
            </BlogMeta>
            <BlogDescription>{blog.description}</BlogDescription>
            <ViewButton onClick={() => router.push(`/blog/${blog.id}`)}>
              View
            </ViewButton>
          </BlogContent>
        </BlogItem>
      ))}
    </BlogContainer>
  );
};

export default Dashboard;
