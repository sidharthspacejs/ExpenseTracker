import React from "react";

const CustomCreationButton = ({ buttonElement, onButtonClick }) => {
  return (
    <div>
      <button
        onClick={onButtonClick}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-sm"
      >
        {buttonElement}
      </button>
    </div>
  );
};

export default CustomCreationButton;
