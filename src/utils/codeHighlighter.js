export const languageLabels = {
  js: "JavaScript",
  jsx: "React JSX",
  ts: "TypeScript",
  tsx: "React TSX",
  bash: "Bash",
  sh: "Shell",
  yaml: "YAML",
  yml: "YAML",
  json: "JSON",
  python: "Python",
  promql: "PromQL",
  text: "Text",
  env: "Environment",
};

export const getLanguageLabel = (language = "text") => {
  return languageLabels[language] || language.toUpperCase();
};

export const copyToClipboard = async (text = "") => {
  if (!navigator?.clipboard) {
    throw new Error("Clipboard API is not available.");
  }

  await navigator.clipboard.writeText(text);
  return true;
};

export const normalizeCode = (code = "") => {
  return code.replace(/^\n+|\n+$/g, "");
};
