// src/app/components/Sidebar.tsx
import React from 'react';
import { AriaAttribute } from '../types/AriaAttributestypes'; // Adjusted import path
import { TranslationStrings } from '../types/Translations.type'; // Adjusted import path

interface SidebarProps {
  attributes: AriaAttribute[];
  selectedAttribute: AriaAttribute | null;
  setSelectedAttribute: (attribute: AriaAttribute) => void;
  sidebarOpen: boolean;
  // setSidebarOpen is not directly passed; AriaGuide handles the toggle button and overlay
  // toggleSidebar function will be called from AriaGuide for the button
  // The visibility is controlled by className passed from AriaGuide based on sidebarOpen state
  pageTranslations: TranslationStrings; // For title and language selector label
  currentLanguage: string; // e.g., 'en', 'es'
  setLanguage: (language: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  attributes,
  selectedAttribute,
  setSelectedAttribute,
  sidebarOpen, // Used for ARIA attribute on nav, not direct style control here
  pageTranslations,
  currentLanguage,
  setLanguage,
}) => {
  const t = pageTranslations;

  // In mobile view, clicking an attribute should also close the sidebar.
  // This logic is already in AriaGuide's setSelectedAttribute,
  // but if we want Sidebar to manage its own closure on item click for mobile,
  // we might need setSidebarOpen here. For now, assuming AriaGuide handles it.

  return (
    <nav
      id="sidebar"
      className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
        transition-transform duration-300 ease-in-out 
        fixed md:relative top-0 left-0 
        h-full w-full md:w-[30%] 
        md:max-w-xs z-20 md:z-0
        md:h-screen bg-white shadow-md 
        overflow-y-auto flex flex-col
        pt-16 md:pt-4
      `}
      aria-label="Attribute navigation"
      aria-hidden={!sidebarOpen && window.innerWidth < 768} // Hide when closed on mobile
    >
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold mb-4 hidden md:block text-gray-900">
          {t.title}
        </h2>
        <ul className="space-y-2" role="list">
          {attributes.map((attr) => (
            <li key={attr.name} role="listitem">
              <button
                onClick={() => {
                  setSelectedAttribute(attr);
                  // The original page.tsx had logic to close sidebar here:
                  // if (window.innerWidth < 768) {
                  //   setSidebarOpen(false); // This would require passing setSidebarOpen
                  // }
                  // For now, this logic remains in AriaGuide or needs setSidebarOpen prop
                }}
                className={`w-full text-left p-3 rounded cursor-pointer transition-colors ${
                  selectedAttribute?.name === attr.name
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-gray-100 text-gray-900'
                }`}
                aria-current={
                  selectedAttribute?.name === attr.name ? 'page' : undefined
                }
              >
                {attr.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Language selector at the bottom */}
      <div className="p-4 border-t">
        <label
          htmlFor="language-select-sidebar" // Ensure unique ID if original is still in DOM
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          {t.languageSelector}
        </label>
        <select
          id="language-select-sidebar"
          value={currentLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded bg-white text-gray-900"
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          {/* Add other languages if supported by translations */}
          {/* <option value="fr">Français</option> */}
          {/* <option value="ja">日本語</option> */}
          {/* <option value="ko">한국어</option> */}
          {/* <option value="zh">中文</option> */}
        </select>
      </div>
    </nav>
  );
};

export default Sidebar;
