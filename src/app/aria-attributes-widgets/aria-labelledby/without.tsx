import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

// New example widget using aria-labelledby
const withoutLabelledBy: React.JSX.Element = (
  <div className="relative">
    <span id="search-label">Search the website</span>
    <input
      type="search"
      className="w-full p-2 border rounded"
    />
  </div>
);

export const withoutLabelledByWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
  <div className="relative">
    <span id="search-label" >
      Search the website
    </span>
    <input
      type="search"
    />
  </div>`}
    />
  ),
  widget: withoutLabelledBy,
};
