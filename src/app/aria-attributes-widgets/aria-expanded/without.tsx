import React, { useState } from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

const ExpandableWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleToggle}
      >
        {isExpanded ? "Hide" : "Show"} Content
      </button>

      <div
        id="content-panel"
        className={`mt-4 p-6 bg-gray-50 rounded-lg shadow ${
          isExpanded ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-800 mb-4">
          This is the expandable content section.
        </p>
        <p className="text-gray-600">
          It is shown when the button is expanded and hidden when collapsed.
        </p>
      </div>
    </div>
  );
};

export const withoutAriaExpandedWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`<div>
      <button
        onClick={handleToggle}
      >
        {isExpanded ? "Hide" : "Show"} Content
      </button>

      <div
        id="content-panel"
        style={{ display: isExpanded ? "block" : "none" }}
      >
        <p>This is the expandable content section.</p>
        <p>
          It is shown when the button is expanded and hidden when collapsed.
        </p>
      </div>
    </div>`}
    />
  ),
  widget: <ExpandableWidget />,
};
