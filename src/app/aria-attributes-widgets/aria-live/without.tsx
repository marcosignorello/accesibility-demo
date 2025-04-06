import React, { useState } from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

const LiveRegionExample = () => {
  const [message, setMessage] = useState("");

  const updateMessage = () => {
    const messages = [
      "Alert: New email received",
      "Warning: Battery is low",
      "Info: Download complete",
      "Success: Changes saved",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="p-5 border border-gray-300 rounded">
      <button
        onClick={updateMessage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Trigger Live Region Update
      </button>
      <div
        className="mt-5 p-2.5 bg-gray-100 min-h-[50px]"
      >
        Polite: {message}
      </div>
    </div>
  );
};

export const withoutAriaLiveWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div className="p-5 border border-gray-300 rounded">
      <button 
        onClick={updateMessage}
      >
        Trigger Live Region Update
      </button>
      <div>
        Polite: {message}
      </div>
    </div>
    `}
    />
  ),
  widget: <LiveRegionExample />,
};
