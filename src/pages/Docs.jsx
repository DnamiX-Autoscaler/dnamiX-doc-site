import React from "react";
import { useLocation } from "react-router-dom";
import { useDocs } from "@/hooks/useDocs";

const Docs = () => {
  const location = useLocation();
  const { Component, loading, error } = useDocs(location.pathname);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return Component ? <Component /> : <p>No doc found</p>;
};

export default Docs;
