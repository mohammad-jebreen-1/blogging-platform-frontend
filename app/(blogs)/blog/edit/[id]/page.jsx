import React from "react";
import EditBlog from "../../../../components/blogs/edit";

export const metadata = {
  title: "Edit Blog",
  description:
    "Edit your existing blog post by updating the title, description, and other details.",
};

const page = () => {
  return <EditBlog />;
};

export default page;
