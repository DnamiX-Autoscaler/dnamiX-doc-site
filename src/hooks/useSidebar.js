import { useMemo, useState } from "react";
import { sidebar } from "@/data/sidebar";

export const useSidebar = (currentPath = "") => {
  const [openGroups, setOpenGroups] = useState(() =>
    sidebar.reduce((acc, group) => {
      acc[group.title] = true;
      return acc;
    }, {}),
  );

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const activeItem = useMemo(() => {
    for (const group of sidebar) {
      const item = group.items.find((item) => item.path === currentPath);
      if (item) return item;
    }
    return null;
  }, [currentPath]);

  const flatItems = useMemo(() => {
    return sidebar.flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        group: group.title,
      })),
    );
  }, []);

  return {
    groups: sidebar,
    openGroups,
    toggleGroup,
    activeItem,
    flatItems,
  };
};
