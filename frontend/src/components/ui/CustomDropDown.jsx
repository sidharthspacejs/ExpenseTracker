import { ChevronDown } from "lucide-react";
import React from "react";
import { useState } from "react";

const CustomDropDown = ({ icon, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 w-40 h-12 rounded-xl border border-gray-300 bg-white px-4 shadow-sm hover:border-indigo-400 transition"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-sm font-medium text-gray-700">{value}</span>
        </div>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
