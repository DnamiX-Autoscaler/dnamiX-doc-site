import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">DnamiX 🚀</h1>

      <p className="text-slate-400 mb-10">
        Intelligent Kubernetes Autoscaling Platform
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/docs/introduction"
          className="px-6 py-3 bg-blue-600 rounded-xl"
        >
          Get Started
        </Link>

        <Link
          to="/blog/post-1"
          className="px-6 py-3 border border-slate-700 rounded-xl"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Home;
