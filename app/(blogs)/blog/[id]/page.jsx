import React from "react";
import BlogDetails from "../../../components/blogs/view";

export const metadata = {
  title: "Blog Details",
  description:
    "View the full details of the blog post, including title, description, comments, and more.",
};

const page = () => {
  return <BlogDetails></BlogDetails>;
};

export default page;
