import React from "react";
import { useState } from "react";

const CustomDropDown = ({ icon, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button className="flex items-center justify-between gap-3 w-40 h-12 rounded-xl border border-gray-300 bg-white px-4 shadow-sm hover:border-indigo-400 transition"></button>
    </div>
  );
};

export default CustomDropDown;
