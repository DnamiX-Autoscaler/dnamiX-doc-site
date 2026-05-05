import React from "react";
import { Link } from "react-router-dom";

const Examples = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Examples</h1>

      <div className="space-y-4">
        <Link to="/docs/examples/ecommerce">E-Commerce</Link>
        <br />
        <Link to="/docs/examples/fintech">FinTech</Link>
        <br />
        <Link to="/docs/examples/healthcare">Healthcare</Link>
      </div>
    </div>
  );
};

export default Examples;
