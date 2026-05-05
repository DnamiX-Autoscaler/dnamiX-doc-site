import { slugify } from "./mdxParser";

export const generateTOCFromDocument = () => {
  if (typeof document === "undefined") return [];

  const headings = Array.from(
    document.querySelectorAll("article h2, article h3"),
  );

  return headings.map((heading) => {
    if (!heading.id) {
      heading.id = slugify(heading.textContent || "");
    }

    return {
      id: heading.id,
      label: heading.textContent || "",
      level: heading.tagName === "H2" ? 2 : 3,
    };
  });
};

export const generateTOCFromText = (content = "") => {
  const regex = /^(##|###)\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    toc.push({
      id: slugify(match[2]),
      label: match[2],
      level: match[1] === "##" ? 2 : 3,
    });
  }

  return toc;
};
