import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

// New example widget using aria-label
export const withLabel: React.JSX.Element = (
  <div className="relative">
    <input
      type="search"
      aria-label="Search the website"
      className="w-full p-2 border rounded"
      placeholder="Search..."
    />
  </div>
);

export const withLabelWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`<div className="relative">
    <input
      type="search"
      aria-label="Search the website" 
      className="w-full p-2 border rounded"
      placeholder="Search..."
    />
  </div>`}
    />
  ),
  widget: withLabel,
};
