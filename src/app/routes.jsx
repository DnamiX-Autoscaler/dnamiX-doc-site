import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Docs from "@/pages/Docs";
import Blog from "@/pages/Blog";
import Examples from "@/pages/Examples";
import Feedback from "@/pages/Feedback";
import NotFound from "@/pages/NotFound";
import Layout from "./layouts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
