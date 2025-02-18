"use client";
import React, { useState } from "react";
import { Translations } from "./types/Translations.type";
import {
  AriaAttribute,
} from "./types/AriaAttributestypes";
import { ariaAttributesContent } from "./aria-attributes/data";

const translations: Translations = {
  en: {
    title: "ARIA Attributes",
    selectAttribute: "Please choose an attribute",
    description: "Description",
    usedFor: "What is it used for?",
    importance: "Why is it important?",
    example: "Example",
    languageSelector: "Select Language",
  },
  es: {
    title: "Atributos ARIA",
    selectAttribute: "Por favor, seleccione un atributo",
    description: "Descripción",
    usedFor: "¿Para qué se usa?",
    importance: "¿Por qué es importante?",
    example: "Ejemplo",
    languageSelector: "Seleccionar Idioma",
  },
};

const AriaGuide = () => {
  const [selectedAttribute, setSelectedAttribute] =
    useState<AriaAttribute | null>(null);
  const [language, setLanguage] = useState<string>("es");

  const t = translations[language];
  const attributes = ariaAttributesContent[language as keyof typeof ariaAttributesContent] ?? [];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left column - 30% width */}
      <div className="w-[30%] h-full bg-white shadow-md overflow-y-auto flex flex-col">
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-4">{t.title}</h2>
          <ul className="space-y-2">
            {attributes.map((attr) => (
              <li
                key={attr.name}
                onClick={() => setSelectedAttribute(attr)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedAttribute?.name === attr.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
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

      {/* Right column - 70% width */}
      <div className="flex-1 p-8 overflow-y-auto">
        {selectedAttribute ? (
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
              <div className="space-y-4">
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
                  <code>{selectedAttribute.example.code}</code>
                </pre>
                <div className="p-4 border rounded bg-white">
                  {selectedAttribute.example.widget}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-xl">
            {t.selectAttribute}
          </div>
        )}
      </div>
    </div>
  );
};

export default AriaGuide;
