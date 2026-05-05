import React from "react";
import { useLocation } from "react-router-dom";
import { useDocs } from "@/hooks/useDocs";

const Blog = () => {
  const location = useLocation();
  const { Component } = useDocs(location.pathname);

  return Component ? <Component /> : <p>No blog found</p>;
};

export default Blog;
