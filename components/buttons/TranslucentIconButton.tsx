interface TranslucentIconButtonProps {
  onClick: () => void;
  title: string;
  label: string;
}

const TranslucentIconButton: React.FC<TranslucentIconButtonProps> = ({
  onClick,
  title,
  label,
  children,
}) => (
  <button
    className="p-2 border text-gray-500 opacity-50 
		rounded-md  hover:opacity-100 
		transition-opacity duration-75"
    onClick={onClick}
    title={title}
    aria-label={label}
  >
    {children}
  </button>
);

export default TranslucentIconButton;
