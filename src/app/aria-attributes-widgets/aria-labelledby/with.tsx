import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

// New example widget using aria-labelledby
export const withLabelledBy: React.JSX.Element = (
  <div className="relative">
    <span id="search-label">Search</span>
    <input
      aria-labelledby="search-label search-description"
      className="w-full p-2 border rounded"
    />
  </div>
);

export const withLabelledByWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
  <div className="relative">
    <span id="search-label" >
      Search
    </span>
    <input
      aria-labelledby="search-label"
    />
  </div>`}
    />
  ),
  widget: withLabelledBy,
};
