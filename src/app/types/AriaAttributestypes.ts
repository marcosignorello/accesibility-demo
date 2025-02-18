import { ReactNode } from 'react';

type Example = {
  code: string;
  widget: ReactNode;
};

export type AriaAttribute = {
  name: string;
  description: string;
  usedFor: string;
  importance: string;
  example: Example;
};

export type AriaAttributesContentType = {
  'en': AriaAttribute[];
  'es': AriaAttribute[];
};

