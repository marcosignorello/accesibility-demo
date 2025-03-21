export type TranslationStrings = {
  title: string;
  selectAttribute: string;
  description: string;
  usedFor: string;
  importance: string;
  example: string;
  languageSelector: string;
  withAttribute: string;
  codeExample: string;
  liveDemo: string;
  withoutAttribute: string;
};

export type Translations = {
  [key: string]: TranslationStrings;
};
