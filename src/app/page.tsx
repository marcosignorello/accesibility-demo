"use client";
import React, { useEffect, useState } from "react";
import {translations as ariaAttributeDetails} from './translations/ariaAttributeDetails'
import {  TranslationStrings } from "./types/Translations.type";
import {
  AriaAttribute,
} from "./types/AriaAttributestypes";
import { ariaAttributesContent } from "./translations/ariaAttributeContent";


const AriaGuide = () => {
  const [language, setLanguage] = useState<string>("en");
  const [selectedAttribute, setSelectedAttribute] =
    useState<AriaAttribute>(ariaAttributesContent['en'][0]);
  const [pageTranslations, setPageTranslations] = useState<TranslationStrings>(ariaAttributeDetails[language])
  const [attributes, setAttributes] = useState(ariaAttributesContent[language as keyof typeof ariaAttributesContent] ?? [])
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  useEffect(() => {
    setPageTranslations(ariaAttributeDetails[language])
    setAttributes(ariaAttributesContent[language as keyof typeof ariaAttributesContent] ?? [])
  }, [language])
  const t = pageTranslations;

// Toggle sidebar function for mobile view
const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

return (
  <div className="flex flex-col md:flex-row h-screen bg-gray-100 relative overflow-hidden">
    {/* Mobile-specific header with menu button */}
    <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">{t.title}</h1>
      <button 
        onClick={toggleSidebar}
        className="p-2 rounded-md bg-blue-500 text-white"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
    </div>

    {/* Sidebar - transforms for mobile */}
    <div className={`
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:translate-x-0
      transition-transform duration-300 ease-in-out 
      fixed md:relative top-0 left-0 
      h-full w-full md:w-[30%] 
      md:max-w-xs z-20 md:z-0
      md:h-screen bg-white shadow-md 
      overflow-y-auto flex flex-col
      pt-16 md:pt-4
    `}>
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold mb-4 hidden md:block">{t.title}</h2>
        <ul className="space-y-2">
          {attributes.map((attr) => (
            <li 
              key={attr.name}
              onClick={() => {
                setSelectedAttribute(attr);
                // Close sidebar on selection in mobile view
                if (window.innerWidth < 768) {
                  setSidebarOpen(false);
                }
              }}
              className={`p-3 rounded cursor-pointer transition-colors ${
                selectedAttribute?.name === attr.name 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {attr.name}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Language selector at the bottom */}
      <div className="p-4 border-t">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.languageSelector}
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded bg-white"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>

    {/* Overlay to close sidebar when clicked outside on mobile */}
    {sidebarOpen && (
      <div 
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={() => setSidebarOpen(false)} 
      />
    )}

    {/* Main content area */}
    <div className="flex-1 p-4 md:p-8 overflow-y-auto pt-4 md:pt-8">
      {(
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{selectedAttribute.name}</h1>
          
          <section>
            <h2 className="text-xl font-semibold mb-2">{t.description}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedAttribute.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t.usedFor}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedAttribute.usedFor}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t.importance}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedAttribute.importance}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t.example}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* With Attribute */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="bg-green-100 p-3 border-b">
                  <h3 className="font-medium text-green-800">{t.withAttribute}</h3>
                </div>
                <div className="p-4">
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto mb-4 text-sm">
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
                  <h3 className="font-medium text-red-800">{t.withoutAttribute}</h3>
                </div>
                <div className="p-4">
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto mb-4 text-sm">
                    <code>{selectedAttribute.example.withoutAttribute.code}</code>
                  </pre>
                  <div className="p-4 border rounded bg-gray-50">
                    {selectedAttribute.example.withoutAttribute.widget}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  </div>
);
};

export default AriaGuide;
