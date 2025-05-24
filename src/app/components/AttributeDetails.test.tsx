import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AttributeDetails from './AttributeDetails';
import { AriaAttribute } from '../types/AriaAttributestypes';
import { TranslationStrings } from '../types/Translations.type';

// Mock data
const mockSelectedAttribute: AriaAttribute = {
  name: 'aria-label',
  description: 'Defines a string value that labels the current element.',
  usage: 'Use when text that labels an element is not visible on screen.', // Note: 'usage' is not in TranslationStrings but is a field in AriaAttribute
  importance: 'High',
  example: {
    withAttribute: { code: '<button aria-label="Close">X</button>', widget: <span>Close Button Widget</span> },
    withoutAttribute: { code: '<button>X</button>', widget: <span>Regular Button Widget</span> },
  },
  usedFor: 'Accessible names for elements.',
};

const mockTranslations: TranslationStrings = {
  title: 'ARIA Guidebook',
  languageSelector: 'Select Language:',
  description: 'Description',
  usedFor: 'Used For', // Key for "Used For" section heading
  importance: 'Importance', // Key for "Importance" section heading
  example: 'Example', // Key for "Example" section heading
  withAttribute: 'With Attribute',
  withoutAttribute: 'Without Attribute',
};

describe('AttributeDetails Component', () => {
  it('renders the selected attribute name as a heading', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    // The name is rendered as a top-level heading in the component
    expect(screen.getByRole('heading', { name: mockSelectedAttribute.name, level: 1 })).toBeInTheDocument();
  });

  it('renders the description section with heading and content', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.description, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(mockSelectedAttribute.description)).toBeInTheDocument();
  });

  it('renders the "Used For" section with heading and content', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.usedFor, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(mockSelectedAttribute.usedFor)).toBeInTheDocument();
  });

  it('renders the importance section with heading and content', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.importance, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(mockSelectedAttribute.importance)).toBeInTheDocument();
  });

  it('renders the example section with heading', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.example, level: 2 })).toBeInTheDocument();
  });

  it('renders the "With Attribute" example sub-section with code and widget', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.withAttribute, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(mockSelectedAttribute.example.withAttribute.code)).toBeInTheDocument();
    // Check for widget text content or a more specific selector if possible
    expect(screen.getByText('Close Button Widget')).toBeInTheDocument();
  });

  it('renders the "Without Attribute" example sub-section with code and widget', () => {
    render(
      <AttributeDetails
        selectedAttribute={mockSelectedAttribute}
        t={mockTranslations}
      />
    );
    expect(screen.getByRole('heading', { name: mockTranslations.withoutAttribute, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(mockSelectedAttribute.example.withoutAttribute.code)).toBeInTheDocument();
    // Check for widget text content
    expect(screen.getByText('Regular Button Widget')).toBeInTheDocument();
  });
});
