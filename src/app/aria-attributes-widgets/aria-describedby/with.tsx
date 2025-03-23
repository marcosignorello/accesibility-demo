import { useLanguage } from "@/app/languange.context";
import { CodeAccordion } from "../components/codeAccordion";
import { AriaWidget } from "../types";
import { translations } from "./translations";

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

export const withDescribedByWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div className="form-group">
      <label htmlFor="username">{t.usernameLabel}:</label>
      <input type="text" id="username" aria-describedby="username-help" />

      <p id="username-help" className="help-text">
        {t.usernameHelp}
      </p>
    </div>`}
    />
  ),
  widget: <AriaDescribedByExample />,
};
