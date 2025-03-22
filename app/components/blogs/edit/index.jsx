"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useDropzone } from "react-dropzone";
import axiosInstance from "../../../lib/axios-instance";
import { useAuthContext } from "../../../context/auth-context";
import { IMAGE_ALLOWED_TYPE } from "../../../constants";
import Image from "../../../components/common/image";
import {
  Container,
  Form,
  TitleInput,
  DescriptionInput,
  ImageUploadContainer,
  ImageUploadText,
  SaveButton,
  ErrorMessage,
  ExistingImageContainer,
  RemoveImageButton,
} from "./styles";

const EditBlog = () => {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosInstance.get(`/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const blog = response.data;

        setTitle(blog.title);

        setDescription(blog.description);

        setExistingImage(blog.image);
      } catch (error) {}
    };

    fetchBlog();
  }, [user]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: IMAGE_ALLOWED_TYPE,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
      setExistingImage("");
    },
  });

  const removeImage = () => {
    setExistingImage("");
    setImage(null);
  };

  const handleSave = async () => {
    setError("");

    if (!title || !description) {
      setError("Please fill out all fields.");
      return;
    }

    if (!existingImage && !image) {
      setError("Please upload an image.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axiosInstance.patch(`/api/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      router.push("/blog/my-blogs");
    } catch (error) {
      if (error.status === 403) {
        setError("You are not authorized to update this blog.");
      } else {
        setError("Failed to update blog. Please try again.");
      }
    }
  };

  return (
    <Container>
      <Form>
        <h1>Edit Blog</h1>
        {existingImage ? (
          <ExistingImageContainer>
            <Image imagePath={existingImage} alt="Existing Blog" width={200} />
            <RemoveImageButton onClick={removeImage}>
              Remove Image
            </RemoveImageButton>
          </ExistingImageContainer>
        ) : (
          <ImageUploadContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {image ? (
              <p>Image Uploaded: {image.name}</p>
            ) : (
              <ImageUploadText>
                Drag and drop an image here, or click to select one.
              </ImageUploadText>
            )}
          </ImageUploadContainer>
        )}
        <TitleInput
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DescriptionInput
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Form>
    </Container>
  );
};

export default EditBlog;
