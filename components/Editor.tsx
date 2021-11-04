interface EditorProps {
  text: string;
  onChange: (json: string) => void;
}

const Editor: React.FC<EditorProps> = ({ text, onChange }) => {
  return (
    <div className="border rounded-md p-4">
      <textarea
        className="w-full h-full outline-none font-mono"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="JSON"
      />
    </div>
  );
};

export default Editor;
