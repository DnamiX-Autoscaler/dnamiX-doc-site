import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center px-4 py-2 border rounded-full bg-slate-900 border-slate-800">
      <Search size={16} className="text-slate-400" />

      <input
        placeholder="Search docs..."
        className="w-full ml-2 text-white bg-transparent outline-none"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
