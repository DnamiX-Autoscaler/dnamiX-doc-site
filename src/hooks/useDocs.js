import { useEffect, useState } from "react";
import { getRouteLoader } from "@/data/routes";
import { generateTOCFromDocument } from "@/utils/tocGenerator";

export const useDocs = (path) => {
  const [Component, setComponent] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadDoc = async () => {
      setLoading(true);
      setError("");
      setComponent(null);

      try {
        const loader = getRouteLoader(path);

        if (!loader) {
          throw new Error(`No documentation page found for ${path}`);
        }

        const module = await loader();

        if (!mounted) return;

        setComponent(() => module.default);

        setTimeout(() => {
          if (mounted) {
            setHeadings(generateTOCFromDocument());
          }
        }, 100);
      } catch (err) {
        if (mounted) {
          setError(err.message || "Failed to load documentation.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadDoc();

    return () => {
      mounted = false;
    };
  }, [path]);

  return {
    Component,
    headings,
    loading,
    error,
  };
};
