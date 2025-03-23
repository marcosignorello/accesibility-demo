import { ReactNode } from "react";

type Example = {
  code: ReactNode | string;
  widget: ReactNode;
};

export type AriaAttribute = {
  name: string;
  description: string;
  usedFor: string;
  importance: string;
  example: {
    withAttribute: Example;
    withoutAttribute: Example;
  };
};

export type AriaAttributesContentType = {
  en: AriaAttribute[];
  es: AriaAttribute[];
};
