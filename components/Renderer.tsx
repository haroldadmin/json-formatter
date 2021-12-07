import { useEffect, useState } from "react";

interface RendererProps {
  json: string;
  indentation?: number;
}

const Renderer: React.FC<RendererProps> = ({ json, indentation = 2 }) => {
  const [formattedText, setFormattedText] = useState("");
  const [error, setError] = useState<string>();

  const onCopy = () => {
    navigator.clipboard.writeText(formattedText);
  };

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
      setFormattedText("");
      setError(error.message);
    }
  }, [indentation, json]);

  return (
    <div className="border rounded-md whitespace-pre p-4 relative">
      <div className="absolute top-0 right-0 m-2 flex flex-row justify-end">
        <CopyButton onClick={onCopy} />
      </div>
      {error && (
        <p className="text-red-400 max-w-full whitespace-pre-wrap">{error}</p>
      )}
      <textarea
        className="bg-white placeholder-gray-400 w-full h-full resize-none font-mono"
        disabled
        value={formattedText}
      />
    </div>
  );
};

interface CopyButtonProps {
  onClick: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => {
  return (
    <button
      className="
      p-2 border text-gray-500 opacity-50 rounded-md 
      hover:opacity-100 transition-opacity duration-75
      "
      onClick={onClick}
      title="Copy"
      aria-label="Copy"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    </button>
  );
};

export default Renderer;
