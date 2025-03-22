"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import axiosInstance from "../../../lib/axios-instance";
import { useAuthContext } from "../../../context/auth-context";
import { IMAGE_ALLOWED_TYPE } from "../../../constants";
import {
  Container,
  Form,
  TitleInput,
  DescriptionInput,
  ImageUploadContainer,
  ImageUploadText,
  SaveButton,
  ErrorMessage,
} from "./styles";

const CreateBlog = () => {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();

  const { getRootProps, getInputProps } = useDropzone({
    accept: IMAGE_ALLOWED_TYPE,
    onDrop: (acceptedFiles) => setImage(acceptedFiles[0]),
  });

  const handleSave = async () => {
    if (!title || !description || !image) {
      setError("Please fill out all fields and upload an image.");
      return;
    }

    setError("");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axiosInstance.post("/api/blogs", formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      router.push("/blog/my-blogs");
    } catch (error) {}
  };

  return (
    <Container>
      <Form>
        <h1>Create a New Blog</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Form>
    </Container>
  );
};

export default CreateBlog;
