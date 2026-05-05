export const extractFrontmatter = (raw = "") => {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {
      frontmatter: {},
      content: raw,
    };
  }

  const yaml = match[1];
  const content = raw.replace(match[0], "").trim();

  const frontmatter = yaml.split("\n").reduce((acc, line) => {
    const [key, ...rest] = line.split(":");

    if (!key || rest.length === 0) return acc;

    acc[key.trim()] = rest
      .join(":")
      .trim()
      .replace(/^["']|["']$/g, "");
    return acc;
  }, {});

  return {
    frontmatter,
    content,
  };
};

export const slugify = (value = "") => {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getReadingTime = (content = "") => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};
