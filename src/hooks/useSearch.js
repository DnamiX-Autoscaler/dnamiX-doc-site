import { useMemo, useState } from "react";
import { sidebar } from "@/data/sidebar";

const searchableDocs = sidebar.flatMap((group) =>
  group.items.map((item) => ({
    title: item.title,
    path: item.path,
    group: group.title,
    description: `${item.title} documentation in ${group.title}`,
  })),
);

export const useSearch = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    return searchableDocs
      .filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      })
      .slice(0, 8);
  }, [query]);

  const clearSearch = () => setQuery("");

  return {
    query,
    setQuery,
    results,
    clearSearch,
  };
};
