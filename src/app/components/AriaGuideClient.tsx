"use client";
import React, { useEffect, useState } from "react";
import { translations as ariaAttributeDetailsFile } from "../translations/ariaAttributeDetails"; // Renamed to avoid conflict
import { TranslationStrings } from "../types/Translations.type";
import { AriaAttribute } from "../types/AriaAttributestypes";
import { ariaAttributesContent as ariaAttributesContentFile } from "../translations/ariaAttributeContent"; // Renamed to avoid conflict
import { useLanguage } from "../languange.context"; // Adjusted path

import Sidebar from "./Sidebar"; 
import AttributeDetails from "./AttributeDetails";

interface AriaGuideClientProps {
  initialAttributes: AriaAttribute[];
  initialSelectedAttribute: AriaAttribute;
  initialPageTranslations: TranslationStrings;
}

const AriaGuideClient: React.FC<AriaGuideClientProps> = ({
  initialAttributes,
  initialSelectedAttribute,
  initialPageTranslations,
}) => {
  const { language, setLanguage } = useLanguage();
  
  const [attributes, setAttributes] = useState<AriaAttribute[]>(initialAttributes);
  const [selectedAttribute, setSelectedAttribute] = useState<AriaAttribute>(initialSelectedAttribute);
  const [pageTranslations, setPageTranslations] = useState<TranslationStrings>(initialPageTranslations);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Update translations and attributes when language changes
    // The initial state is set by props, so this runs for subsequent language changes.
    const newTranslations = ariaAttributeDetailsFile[language];
    const newAttributes = ariaAttributesContentFile[language as keyof typeof ariaAttributesContentFile] ?? [];
    
    setPageTranslations(newTranslations);
    setAttributes(newAttributes);

    // Ensure selectedAttribute is updated if the current one doesn't exist in the new language set
    // or if it's the initial load for a language (though initial is handled by props).
    if (newAttributes.length > 0) {
      const currentSelectedExistsInNewAttrs = newAttributes.find(attr => attr.name === selectedAttribute?.name);
      if (!currentSelectedExistsInNewAttrs) {
        setSelectedAttribute(newAttributes[0]);
      }
    } else {
      // Handle case where new attributes for a language might be empty
      // setSelectedAttribute(null); // Or some default state if applicable
    }
  }, [language, selectedAttribute?.name]); // Keep selectedAttribute?.name dependency for robust checks
  
  const t = pageTranslations;
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleSetSelectedAttribute = (attribute: AriaAttribute) => {
    setSelectedAttribute(attribute);
    if (window.innerWidth < 768 && sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  // This effect ensures that if initialSelectedAttribute itself needs to be re-evaluated
  // due to language change (e.g. if the name isn't found in the new set), it's handled.
  // The effect above already does this, but this is an explicit check against initial prop if language matches initial.
  useEffect(() => {
    // If the language from context has changed from what might have been an implicitly 'en' (or default)
    // initial load, the main useEffect above handles updates.
    // This is more about ensuring consistency if the very initial props need adjustment based on the *initial* language context.
    // However, page.tsx will now provide language-specific initial props.
    // So, this effect might be simplified or removed if page.tsx guarantees language-consistent initial props.
    const currentContextLanguageAttributes = ariaAttributesContentFile[language as keyof typeof ariaAttributesContentFile] ?? [];
    if (currentContextLanguageAttributes.length > 0 && !currentContextLanguageAttributes.find(attr => attr.name === selectedAttribute?.name)) {
        // This can happen if `language` from context initializes to something different than server's default
        // and selectedAttribute passed as prop is not in that new language set.
        setSelectedAttribute(currentContextLanguageAttributes[0]);
    }
  }, [language, selectedAttribute, setSelectedAttribute]);


  // If selectedAttribute is somehow null (e.g. if initialAttributes was empty for the default lang),
  // and attributes get populated by a language change, set a default.
  useEffect(() => {
    if (!selectedAttribute && attributes.length > 0) {
      setSelectedAttribute(attributes[0]);
    }
  }, [attributes, selectedAttribute]);


  if (!selectedAttribute && attributes.length === 0) {
    // This case means initial attributes were empty and no language change has populated them yet,
    // or the current language has no attributes.
    // Render a loading state or a message.
    // For now, returning null or a minimal message might be okay, but ideally, page.tsx (server)
    // should ensure initialAttributes is not empty for the default language.
    return <div>Loading attributes or no attributes available for the selected language.</div>;
  }
  
  // If selectedAttribute is null but attributes ARE available (e.g. after a language change that had no matching selected attr name)
  // the useEffect above should set one. If it's still null here, it's a state that should ideally not be reached.
  // For robustness, we can add a check.
   if (!selectedAttribute && attributes.length > 0) {
    // This implies an effect to set selectedAttribute hasn't run or completed.
    // This could briefly happen. Can show loading or let an effect fix it.
    // For now, we proceed, assuming an effect will imminently set it.
  }


  return (
    <main className="flex flex-col md:flex-row h-screen bg-gray-100 relative overflow-hidden">
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-900">{t?.title || 'ARIA Guide'}</h1>
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

      <Sidebar
        attributes={attributes}
        selectedAttribute={selectedAttribute} // This can be null briefly if initial attributes were empty
        setSelectedAttribute={handleSetSelectedAttribute}
        sidebarOpen={sidebarOpen}
        pageTranslations={t}
        currentLanguage={language}
        setLanguage={setLanguage}
      />

      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
          role="presentation"
        />
      )}
      
      {/* Ensure selectedAttribute is not null before rendering AttributeDetails */}
      {/* Also check if pageTranslations (t) is loaded */}
      {selectedAttribute && t && (
        <AttributeDetails selectedAttribute={selectedAttribute} t={t} />
      )}
      {/* Fallback if t is not loaded yet, though initialPageTranslations should prevent this */}
      {!t && <div>Loading translations...</div>}
    </main>
  );
};

export default AriaGuideClient;
