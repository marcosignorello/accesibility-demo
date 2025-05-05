// Example widget showing aria-invalid usage with translations
import { useLanguage } from "@/app/languange.context";
import React, { useState } from "react";
import { translations } from "./translations";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

export const ValidationExample: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validateEmail(newValue));
  };

  return (
    <div role="form" className="max-w-md mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.emailAddressLabel}
      </label>
      <input
        value={value}
        onChange={handleChange}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
          ${!isValid 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-blue-500'}`}
      />
      {!isValid && (
        <span className="mt-2 text-sm text-red-600">
          {t.emailError}
        </span>
      )}
    </div>
  );
};

export const WithoutAriaInvalidWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div role="form">
      <label>{t.emailAddressLabel}</label>
      <input
        type="email"
        value={value}
        onChange={handleChange}
      />
      {!isValid && (
        <span className="error-message">
          {t.emailError}
        </span>
      )}
    </div>`}
    />
  ),
  widget: <ValidationExample />,
};
