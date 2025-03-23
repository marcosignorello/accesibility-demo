"use client";
import React, { useEffect, useState } from "react";
import { translations as ariaAttributeDetails } from "./translations/ariaAttributeDetails";
import { TranslationStrings } from "./types/Translations.type";
import { AriaAttribute } from "./types/AriaAttributestypes";
import { ariaAttributesContent } from "./translations/ariaAttributeContent";
import { useLanguage } from "./languange.context";

const AriaGuide = () => {
  const { language, setLanguage } = useLanguage();
  const [selectedAttribute, setSelectedAttribute] = useState<AriaAttribute>(
    ariaAttributesContent[language as keyof typeof ariaAttributesContent][0]
  );
  const [pageTranslations, setPageTranslations] = useState<TranslationStrings>(
    ariaAttributeDetails[language]
  );
  const [attributes, setAttributes] = useState(
    ariaAttributesContent[language as keyof typeof ariaAttributesContent] ?? []
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setPageTranslations(ariaAttributeDetails[language]);
    setAttributes(
      ariaAttributesContent[language as keyof typeof ariaAttributesContent] ??
        []
    );
  }, [language]);
  
  const t = pageTranslations;
  // Toggle sidebar function for mobile view
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <main className="flex flex-col md:flex-row h-screen bg-gray-100 relative overflow-hidden">
      {/* Mobile-specific header with menu button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={sidebarOpen}
          aria-controls="sidebar"
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar - transforms for mobile */}
      <nav
        id="sidebar"
        className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
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
                    if (window.innerWidth < 768) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={`w-full text-left p-3 rounded cursor-pointer transition-colors ${
                    selectedAttribute?.name === attr.name
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-100 text-gray-900"
                  }`}
                  aria-current={
                    selectedAttribute?.name === attr.name ? "page" : undefined
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
            htmlFor="language-select"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            {t.languageSelector}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded bg-white text-gray-900"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </nav>

      {/* Overlay to close sidebar when clicked outside on mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
          role="presentation"
        />
      )}

      {/* Main content area */}
      <article className="flex-1 p-4 md:p-8 overflow-y-auto pt-4 md:pt-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedAttribute.name}
          </h1>

          <section aria-labelledby="description-heading">
            <h2
              id="description-heading"
              className="text-xl font-semibold mb-2 text-gray-900"
            >
              {t.description}
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              {selectedAttribute.description}
            </p>
          </section>

          <section aria-labelledby="usedfor-heading">
            <h2
              id="usedfor-heading"
              className="text-xl font-semibold mb-2 text-gray-900"
            >
              {t.usedFor}
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              {selectedAttribute.usedFor}
            </p>
          </section>

          <section aria-labelledby="importance-heading">
            <h2
              id="importance-heading"
              className="text-xl font-semibold mb-2 text-gray-900"
            >
              {t.importance}
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              {selectedAttribute.importance}
            </p>
          </section>

          <section aria-labelledby="example-heading">
            <h2
              id="example-heading"
              className="text-xl font-semibold mb-2 text-gray-900"
            >
              {t.example}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* With Attribute */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="bg-green-100 p-3 border-b">
                  <h3 className="font-medium text-green-900">
                    {t.withAttribute}
                  </h3>
                </div>
                <div className="p-4">
                  <pre
                    className="bg-gray-800 text-white p-4 rounded overflow-x-auto mb-4 text-sm"
                    role="code"
                  >
                    <code>{selectedAttribute.example.withAttribute.code}</code>
                  </pre>
                  <div className="p-4 border rounded bg-gray-50">
                    {selectedAttribute.example.withAttribute.widget}
                  </div>
                </div>
              </div>

              {/* Without Attribute */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="bg-red-100 p-3 border-b">
                  <h3 className="font-medium text-red-900">
                    {t.withoutAttribute}
                  </h3>
                </div>
                <div className="p-4">
                  <pre
                    className="bg-gray-800 text-white p-4 rounded overflow-x-auto mb-4 text-sm"
                    role="code"
                  >
                    <code>
                      {selectedAttribute.example.withoutAttribute.code}
                    </code>
                  </pre>
                  <div className="p-4 border rounded bg-gray-50">
                    {selectedAttribute.example.withoutAttribute.widget}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default AriaGuide;
