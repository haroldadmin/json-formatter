import { useEffect, useState } from "react";

interface RendererProps {
  json: string;
  indentation?: number;
}

const Renderer: React.FC<RendererProps> = ({ json, indentation = 2 }) => {
  const [formattedText, setFormattedText] = useState("");
  const [error, setError] = useState<string>();

  useEffect(() => {
    try {
      if (json === "") {
        setFormattedText("");
        setError(undefined);
        return;
      }

      const parsed = JSON.parse(json);
      const formatted = JSON.stringify(parsed, null, indentation);
      setFormattedText(formatted);
      setError(undefined);
    } catch (error: any) {
      setError(error.message);
    }
  }, [indentation, json]);

  return (
    <div className="border rounded-md whitespace-pre p-4">
      {error && (
        <p className="text-red-400 max-w-full whitespace-pre-wrap">{error}</p>
      )}
      <p>{formattedText}</p>
    </div>
  );
};

export default Renderer;
