type TranslationStrings = {
  title: string;
  selectAttribute: string;
  description: string;
  usedFor: string;
  importance: string;
  example: string;
  languageSelector: string;
};

export type Translations = {
  [key: string]: TranslationStrings;
};
