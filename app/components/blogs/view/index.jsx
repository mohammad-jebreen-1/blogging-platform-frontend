"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "../../../lib/axios-instance";
import { useAuthContext } from "../../../context/auth-context";
import LoadingText from "../../common/loading-text";
import formatDate from "../../../lib/format-date";
import {
  Container,
  BlogContent,
  BlogImage,
  BlogInfo,
  Title,
  Author,
  BlogDate,
  Description,
  CommentsSection,
  CommentInput,
  CommentButton,
  CommentDate,
  CommentList,
  CommentItem,
  CommentAvatar,
  CommentDetails,
  CommentText,
  CommentAuthor,
} from "./styles";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        if (id) {
          const response = await axiosInstance.get(`/api/blogs/${id}`);

          setBlog(response.data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    try {
      await axiosInstance.post(`/api/blogs/comments`, {
        content: comment,
        blogId: id,
      });

      setBlog({
        ...blog,
        comments: [
          ...blog.comments,
          {
            author: { email: user.email },
            content: comment,
            createdAt: new Date(),
          },
        ],
      });

      setComment("");
    } catch (error) {}
  };

  if (loading) {
    return <LoadingText text="Loading view blog..." />;
  }

  return (
    <Container>
      <BlogContent>
        <BlogImage imagePath={blog.image} alt={blog.title} />
        <BlogInfo>
          <Title>{blog.title}</Title>
          <Author>By {blog.author.email}</Author>
          <BlogDate>{formatDate(blog.createdAt)}</BlogDate>
        </BlogInfo>
      </BlogContent>
      <Description>{blog.description}</Description>

      <CommentsSection>
        <h3>Comments</h3>
        <CommentList>
          {blog.comments.length > 0 &&
            blog.comments.map((c, index) => (
              <CommentItem key={index}>
                <CommentAvatar>{c.author.email[0].toUpperCase()}</CommentAvatar>
                <CommentDetails>
                  <CommentAuthor>{c.author.email}</CommentAuthor>
                  <CommentText>{c.content}</CommentText>
                  <CommentDate>{formatDate(c.createdAt)}</CommentDate>
                </CommentDetails>
              </CommentItem>
            ))}
        </CommentList>

        <CommentInput
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <CommentButton onClick={handleCommentSubmit}>Submit</CommentButton>
      </CommentsSection>
    </Container>
  );
};

export default BlogDetails;
