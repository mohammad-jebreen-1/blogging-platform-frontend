import React from "react";
import MyBlogs from "../../../components/blogs/my-blogs";

export const metadata = {
  title: "My Blogs ",
  description:
    "View and manage all of your blog posts in one place. Edit, delete, and track your published blogs.",
};

const page = () => {
  return <MyBlogs />;
};

export default page;
