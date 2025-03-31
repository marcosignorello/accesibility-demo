import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

export const withoutLabel: React.JSX.Element = (
  <div className="relative">
    <input type="search" className="w-full p-2 border rounded" />
  </div>
);

export const withoutLabelWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
  <div className="relative">
    <input
      type="search"
      className="w-full p-2 border rounded"
    />
  </div>`}
    />
  ),
  widget: withoutLabel,
};
