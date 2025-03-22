import React from "react";
import CreateBlog from "../../../components/blogs/create";

export const metadata = {
  title: "Create a Blog ",
  description:
    "Create a new blog post by filling out the form with the title, description, and other details.",
};

const page = () => {
  return <CreateBlog />;
};

export default page;
