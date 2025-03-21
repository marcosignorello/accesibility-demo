import React from "react";

const CustomCheckbox: React.FC<{ label: string }> = ({ label }) => {
  const [checked, setChecked] = React.useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      setChecked(!checked);
    }
  };

  return (
    <div className="flex items-center">
      <input
        id="link-checkbox"
        type="checkbox"
        value=""
        aria-checked={checked}
        onKeyDown={handleKeyPress}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        aria-labelledby="link-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

// Usage example
export const CondimentSelector: React.FC = () => {
  return (
    <>
      <h3 id="id-group-label" className="text-xl font-semibold mb-4">
        Sandwich Condiments
      </h3>
      <div
        role="group"
        aria-labelledby="id-group-label"
        className="w-full max-w-md"
      >
        <ul className="space-y-2">
          <li>
            <CustomCheckbox label="Lettuce" />
          </li>
          <li>
            <CustomCheckbox label="Tomato" />
          </li>
          <li>
            <CustomCheckbox label="Mustard" />
          </li>
          <li>
            <CustomCheckbox label="Sprouts" />
          </li>
        </ul>
      </div>
    </>
  );
};
