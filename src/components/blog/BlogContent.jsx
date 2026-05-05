import React from "react";

const BlogContent = ({ post }) => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>

      <p className="text-slate-400 mb-6">
        {post.date} • {post.readTime}
      </p>

      <img
        src={post.image}
        alt=""
        className="rounded-3xl border border-slate-800 mb-6"
      />

      <div className="prose prose-invert max-w-none">{post.content}</div>
    </div>
  );
};

export default BlogContent;
