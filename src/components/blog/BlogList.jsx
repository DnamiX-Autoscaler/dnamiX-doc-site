import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts = [] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
