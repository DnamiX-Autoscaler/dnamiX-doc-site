import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition cursor-pointer">
      <p className="text-xs text-blue-400 mb-2">{post.category}</p>

      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>

      <p className="text-sm text-slate-400 mb-4">{post.description}</p>

      <div className="flex justify-between text-xs text-slate-500">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  );
};

export default BlogCard;
