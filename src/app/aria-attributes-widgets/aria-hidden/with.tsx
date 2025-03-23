import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";
import { useLanguage } from "@/app/languange.context";
import { translations } from "./translations";

const WithAriaHiddenExample: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-4 py-2 bg-green-500 
          text-white rounded"
        aria-label={t.notifications}
      >
        <span>{t.notifications}</span>
        <div aria-hidden="true" className="ml-2 inline-flex items-center">
          <span className="text-lg">🔔</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      </button>
    </div>
  );
};

export const WithAriaHiddenWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div>
      <button
        aria-label={t.notifications}
      >
        <span>{t.notifications}</span>
        <div aria-hidden="true">
          <span>🔔</span>
          <span>
            <span className="animate-ping absolute "></span>
            <span className="relative inline-flex"></span>
          </span>
        </div>
      </button>
    </div>`}
    />
  ),
  widget: <WithAriaHiddenExample />,
};
