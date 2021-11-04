import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface DropdownProps<T = any> {
  label: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onDropdownToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  const onDropdownItemClicked = (newValue: typeof value) => {
    setOpen(false);
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block w-full">
        <button
          className="relative w-full z-10 block p-2 text-gray-700 bg-white border border-transparent shadow rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"
          onClick={onDropdownToggle}
        >
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">
              <span className="font-light">{label}:</span> {value}
            </p>
            <AiOutlineDown
              className={
                "w-4 h-4 m-1 text-gray-800 transform transition-transform " +
                (isOpen ? "rotate-180" : "rotate-0")
              }
            />
          </div>
        </button>
        <div
          className={`
            absolute right-0 z-20 w-full py-2 mt-2 
          bg-white rounded-md shadow-xl
            ${isOpen ? "visible" : "invisible"}
          `}
        >
          {options.map((option) => (
            <DropdownItem
              key={option}
              value={option}
              onClick={onDropdownItemClicked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface DropdownItemProps<T = any> {
  value: T;
  onClick: (value: T) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ value, onClick }) => {
  return (
    <p
      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
      onClick={() => onClick(value)}
    >
      {`${value}`}
    </p>
  );
};

export default Dropdown;
