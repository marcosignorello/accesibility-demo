import { translations as ariaAttributeDetails } from "./translations/ariaAttributeDetails";
import { AriaAttribute } from "./types/AriaAttributestypes";
import { ariaAttributesContent } from "./translations/ariaAttributeContent";
import { TranslationStrings } from "./types/Translations.type";

// Import the new client component
import AriaGuideClient from "./components/AriaGuideClient";

// LanguageProvider is assumed to be in layout.tsx or a similar higher-order component.
// No "use client" here, this is a Server Component.

export default function Page() {
  // Determine a default language for initial server render.
  // The actual language context will be managed by LanguageProvider and useLanguage on the client.
  const initialLanguage = 'en'; // Default language for server-side pre-rendering

  // Fetch initial data based on the default language
  const initialAttributes: AriaAttribute[] = ariaAttributesContent[initialLanguage as keyof typeof ariaAttributesContent] ?? [];
  const initialPageTranslations: TranslationStrings = ariaAttributeDetails[initialLanguage as keyof typeof ariaAttributeDetails];
  
  // Set an initial selected attribute. Ensure attributes exist.
  const initialSelectedAttribute: AriaAttribute | undefined = initialAttributes.length > 0 ? initialAttributes[0] : undefined;

  if (!initialSelectedAttribute) {
    // This case should ideally not happen if 'en' (or default lang) always has attributes.
    // Handle this gracefully, perhaps by logging an error or passing empty/default values
    // that AriaGuideClient can handle by showing a "no data" message.
    console.error(`No initial attributes found for language: ${initialLanguage}. AriaGuideClient might not render correctly.`);
    // Depending on requirements, you could throw an error or try a fallback language.
    // For now, we'll proceed, and AriaGuideClient will have to handle potentially undefined initialSelectedAttribute.
    // However, the AriaGuideClient was designed to expect a selectedAttribute.
    // Let's ensure we pass something valid or let it handle it.
    // The client component has checks for empty attributes or missing selected attribute.
  }

  return (
    // The LanguageProvider would typically be in a layout file wrapping children.
    // AriaGuideClient will use the useLanguage() hook, which relies on this provider.
    <AriaGuideClient
      initialAttributes={initialAttributes}
      initialSelectedAttribute={initialSelectedAttribute!} // Asserting non-null based on typical data structure; client component should verify.
      initialPageTranslations={initialPageTranslations}
    />
  );
}

// Note: The 'ariaAttributesContent' might contain JSX elements (widgets).
// When these are passed from a Server Component to a Client Component, Next.js handles
// serialization as long as they are valid React elements or simple data.
// If widgets are complex client components with their own state or effects,
// this approach is generally fine. The server renders what it can (data structure),
// and the client hydrates and takes over the interactive parts.
