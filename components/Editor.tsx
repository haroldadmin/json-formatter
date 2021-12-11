import TranslucentIconButton from "./buttons/TranslucentIconButton";

interface EditorProps {
  text: string;
  onChange: (json: string) => void;
}

const Editor: React.FC<EditorProps> = ({ text, onChange }) => {
  return (
    <div className="border rounded-md p-4 relative">
      <textarea
        className="w-full h-full outline-none font-mono resize-none"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="JSON"
      />
      <div className="absolute top-0 right-0 m-2 flex flex-row justify-end">
        <TranslucentIconButton
          onClick={() => onChange("")}
          title="Clear"
          label="Clear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </TranslucentIconButton>
      </div>
    </div>
  );
};

export default Editor;
