import { CodeAccordion } from "../components/codeAccordion";
import { AriaWidget } from "../types";

// Example widget demonstrating aria-describedby usage
const AriaDescribedByExample = (
  <div className="form-group">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" aria-describedby="username-help" />

    <p id="username-help" className="help-text">
      Username must be between 3-20 characters and contain only letters and
      numbers
    </p>
  </div>
);

export const withDescribedByWidget: AriaWidget = {
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
  widget: AriaDescribedByExample,
};
