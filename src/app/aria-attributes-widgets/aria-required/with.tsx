import React from "react";
import { AriaWidget } from "../types";
import { CodeAccordion } from "../components/codeAccordion";

const RequiredInputExample: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <label htmlFor="role" id="select-role-label" aria-required="true" className="text-gray-700 font-medium">
        Select Role:
      </label>
      <select
        id="role"
        aria-label="Select your role"
        aria-required="true"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
  );
};

export const withAriaRquiredWidget: AriaWidget = {
  code: (
    <CodeAccordion
      code={`
    <div>
      <label htmlFor="role">
        Select Role:
      </label>
      <select
        id="role"
        aria-required="true"
        aria-label="Choose your role"
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>`}
    />
  ),
  widget: <RequiredInputExample />,
};
