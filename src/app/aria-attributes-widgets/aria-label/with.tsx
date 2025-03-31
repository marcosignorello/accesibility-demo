import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

export const withLabel: React.JSX.Element = (
  <div className="relative">
    <input
      type="search"
      aria-label="Search the website"
      className="w-full p-2 border rounded"
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
    />
  </div>`}
    />
  ),
  widget: withLabel,
};
