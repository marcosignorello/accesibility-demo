// src/app/components/AttributeDetails.tsx
import React from 'react';
import { AriaAttribute } from '../types/AriaAttributestypes'; // Adjusted import path
import { TranslationStrings } from '../types/Translations.type'; // Adjusted import path

interface AttributeDetailsProps {
  selectedAttribute: AriaAttribute; // Not nullable as per new page.tsx logic
  t: TranslationStrings; // Alias for pageTranslations
}

const AttributeDetails: React.FC<AttributeDetailsProps> = ({
  selectedAttribute,
  t,
}) => {
  // selectedAttribute is now guaranteed to be non-null by AriaGuide's logic
  // (it defaults to the first attribute).
  // So, no need for a null check here like:
  // if (!selectedAttribute) {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <p className="text-gray-400">{t.selectAttributePrompt}</p> // This prompt might not exist in new translations or be needed
  //     </div>
  //   );
  // }

  return (
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
  );
};

export default AttributeDetails;
