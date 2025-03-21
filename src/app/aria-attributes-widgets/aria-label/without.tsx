import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

// New example widget using aria-label
export const withoutLabel: React.JSX.Element = (
  <div className="relative">
    <input
      type="search"
      className="w-full p-2 border rounded"
      placeholder="Search..."
    />
  </div>
);

export const withoutLabelWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`<div className="relative">
    <input
      type="search"
      className="w-full p-2 border rounded"
      placeholder="Search..."
    />
  </div>`}
    />
  ),
  widget: withoutLabel,
};
