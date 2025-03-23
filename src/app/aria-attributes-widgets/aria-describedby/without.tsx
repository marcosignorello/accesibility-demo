import { useLanguage } from "@/app/languange.context";
import { CodeAccordion } from "../components/codeAccordion";
import { AriaWidget } from "../types";
import { translations } from "./translations";

// Example widget demonstrating aria-describedby usage
const AriaDescribedByExample = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="form-group">
      <label htmlFor="username">{t.usernameLabel}:</label>
      <input type="text" id="username" aria-describedby="username-help" />

      <p id="username-help" className="help-text">
        {t.usernameHelp}
      </p>
    </div>
  );
};

export const withoutDescribedByWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`<div className="form-group">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" aria-describedby="username-help" />

    <p id="username-help" className="help-text">
      Username must be between 3-20 characters and contain only letters and
      numbers
    </p>
  </div>`}
    />
  ),
  widget: <AriaDescribedByExample />,
};
