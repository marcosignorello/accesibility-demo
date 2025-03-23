import React, { useState } from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

const AriaDisabledExample: React.FC = () => {
  // Track if button is in disabled state
  const [isDisabled, setIsDisabled] = useState(false);

  // Toggle disabled state
  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="p-4 space-y-4 rounded-lg shadow-md bg-white">
      <button 
        onClick={toggleDisabled}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isDisabled ? "Enable" : "Disable"} Button Below
      </button>
      <button
        onClick={() => {
          if (!isDisabled) {
            alert("Button clicked!");
          }
        }}
        className={`px-4 py-2 mx-5 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          ${isDisabled 
            ? 'opacity-50 cursor-not-allowed bg-gray-400' 
            : 'bg-green-500 hover:bg-green-600 cursor-pointer text-white'
          }`}
      >
        Test Button without aria-disabled
      </button>
      <p className="text-gray-700 font-medium">
        Current state: Button is {isDisabled ? "disabled" : "enabled"}
      </p>
    </div>
  );
};
export const withoutAriaDisabledWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div className="aria-disabled-demo">
      <button onClick={toggleDisabled}>
        {isDisabled ? 'Enable' : 'Disable'} Button Below
      </button>
      <button
        onClick={() => {
          if (!isDisabled) {
            alert('Button clicked!');
          }
        }}
      >
        Test Button without aria-disabled
      </button>
      <p>
        Current state: Button is {isDisabled ? 'disabled' : 'enabled'}
      </p>
    </div>
            `}
    />
  ),
  widget: <AriaDisabledExample />,
};
