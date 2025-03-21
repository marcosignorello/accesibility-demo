import React, { useState } from "react";
import { CodeAccordionPropsType } from "./types";
import { translations } from "./translations";

interface AccordionProps {
  code: string;
}

const CodeAccordion: React.FC<AccordionProps> = ({
  lang = "en",
  code,
}: CodeAccordionPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-2">
      <button
        className="w-full p-4 text-left font-medium flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{translations[lang]}</span>
        <span className="transform transition-transform duration-200">
          {isOpen ? "▼" : "▶"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 border-t">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export { CodeAccordion };
