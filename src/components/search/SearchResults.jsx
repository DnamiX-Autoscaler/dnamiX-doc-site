import React from "react";

const SearchResults = ({ results = [] }) => {
  if (results.length === 0) {
    return <p className="text-slate-500 mt-4 text-sm">No results found.</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {results.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block p-4 rounded-2xl border border-slate-800 hover:border-blue-500 transition"
        >
          <h4 className="text-white font-semibold">{item.title}</h4>
          <p className="text-sm text-slate-400">{item.description}</p>
        </a>
      ))}
    </div>
  );
};

export default SearchResults;
