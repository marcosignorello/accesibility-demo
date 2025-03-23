import { useLanguage } from "@/app/languange.context";
import React from "react";
import { translations } from "./translations";
import { CodeAccordion } from "../components/codeAccordion";
import { AriaWidget } from "../types";

const CustomCheckbox: React.FC<{ label: string }> = ({ label }) => {
  const [checked, setChecked] = React.useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      setChecked(!checked);
    }
  };

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      className="flex items-center cursor-pointer"
    >
      <div
        className={`w-4 h-4 border rounded-sm ${
          checked
            ? "bg-blue-600 border-blue-600"
            : "bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </div>
  );
};

const WithCondimentSelector: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <>
      <h3 id="condiments-label" className="text-xl font-semibold mb-4">
        {t.sandwichCondiments}
      </h3>
      <div
        role="group"
        aria-labelledby="condiments-label"
        className="w-full max-w-md"
      >
        <ul className="space-y-2">
          <li>
            <CustomCheckbox label={t.lettuce} />
          </li>
          <li>
            <CustomCheckbox label={t.tomato} />
          </li>
          <li>
            <CustomCheckbox label={t.mustard} />
          </li>
          <li>
            <CustomCheckbox label={t.sprouts} />
          </li>
        </ul>
      </div>
    </>
  );
};

export const withAriaCheckedWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
<div role="group" aria-labelledby="condiments-label">
  <h3 id="condiments-label">Select your sandwich condiments</h3>
  <div 
    role="checkbox"
    aria-checked="false"
    tabindex="0"
    onClick={() => {}}
    onKeyDown={(e) => {
      if (e.key === " " || e.key === "Enter") {
        // Toggle checkbox
      }
    }}
  >
    <span>Lettuce</span>
  </div>
</div>`}
    />
  ),

  widget: <WithCondimentSelector />,
};
