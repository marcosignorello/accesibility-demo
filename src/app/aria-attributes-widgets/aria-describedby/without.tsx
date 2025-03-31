import { useLanguage } from "@/app/languange.context";
import { CodeAccordion } from "../components/codeAccordion";
import { AriaWidget } from "../types";
import { translations } from "./translations";

// Example widget demonstrating aria-describedby usage
const AriaDescribedByExample = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="flex flex-col gap-2 p-4">
    <label htmlFor="username" className="text-gray-700 font-medium">{t.usernameLabel}:</label>
    <input 
      type="text" 
      id="username" 
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />

    <p id="username-help" className="text-sm text-gray-600 mt-1">
      {t.usernameHelp}
    </p>
  </div>
  );
};

export const withoutDescribedByWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
  <div>
    <label htmlFor="username">{t.usernameLabel}:</label>
    <input 
      type="text" 
      id="username" 
      aria-describedby="username-help"
    />

    <p id="username-help">
      {t.usernameHelp}
    </p>
  </div>`}
    />
  ),
  widget: <AriaDescribedByExample />,
};
