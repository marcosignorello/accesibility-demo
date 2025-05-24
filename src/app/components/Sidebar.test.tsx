import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import { AriaAttribute } from '../types/AriaAttributestypes';
import { TranslationStrings } from '../types/Translations.type';

// Mock data
const mockAttributes: AriaAttribute[] = [
  {
    name: 'aria-label',
    description: 'Defines a string value that labels the current element.',
    usage: 'Use when text that labels an element is not visible on screen.',
    importance: 'High',
    example: {
      withAttribute: { code: '<button aria-label="Close">X</button>', widget: <span>Close Button</span> },
      withoutAttribute: { code: '<button>X</button>', widget: <span>Regular Button</span> },
    },
    usedFor: 'Accessible names for elements.',
  },
  {
    name: 'aria-live',
    description: 'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
    usage: 'Use for regions that update dynamically, like chat logs or scoreboards.',
    importance: 'Medium',
    example: {
      withAttribute: { code: '<div aria-live="polite">Updates here</div>', widget: <div>Live Region</div> },
      withoutAttribute: { code: '<div>Updates here</div>', widget: <div>Static Region</div> },
    },
    usedFor: 'Dynamic content updates.',
  },
];

const mockTranslations: TranslationStrings = {
  title: 'ARIA Guidebook',
  languageSelector: 'Select Language:',
  description: 'Description',
  usedFor: 'Used For',
  importance: 'Importance',
  example: 'Example',
  withAttribute: 'With Attribute',
  withoutAttribute: 'Without Attribute',
  // Add any other keys used by Sidebar if necessary
};

const mockSetSelectedAttribute = jest.fn();
const mockSetLanguage = jest.fn();

describe('Sidebar Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockSetSelectedAttribute.mockClear();
    mockSetLanguage.mockClear();
  });

  it('renders the title from pageTranslations', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={null}
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    expect(screen.getByText(mockTranslations.title)).toBeInTheDocument();
  });

  it('renders a list of attributes', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={null}
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    expect(screen.getByText(mockAttributes[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockAttributes[1].name)).toBeInTheDocument();
  });

  it('calls setSelectedAttribute when an attribute button is clicked', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={null}
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    fireEvent.click(screen.getByText(mockAttributes[0].name));
    expect(mockSetSelectedAttribute).toHaveBeenCalledWith(mockAttributes[0]);
  });

  it('renders the language selector', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={null}
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    expect(screen.getByLabelText(mockTranslations.languageSelector)).toBeInTheDocument();
  });

  it('calls setLanguage when the language is changed', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={null}
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    fireEvent.change(screen.getByLabelText(mockTranslations.languageSelector), { target: { value: 'es' } });
    expect(mockSetLanguage).toHaveBeenCalledWith('es');
  });

  it('highlights the selected attribute', () => {
    render(
      <Sidebar
        attributes={mockAttributes}
        selectedAttribute={mockAttributes[0]} // First attribute is selected
        setSelectedAttribute={mockSetSelectedAttribute}
        sidebarOpen={true}
        pageTranslations={mockTranslations}
        currentLanguage="en"
        setLanguage={mockSetLanguage}
      />
    );
    const selectedButton = screen.getByText(mockAttributes[0].name);
    // This class check is a bit brittle. A better way might be to check aria-current or a data attribute.
    // The component uses `aria-current={selectedAttribute?.name === attr.name ? 'page' : undefined}`
    expect(selectedButton).toHaveAttribute('aria-current', 'page');

    const unselectedButton = screen.getByText(mockAttributes[1].name);
    expect(unselectedButton).not.toHaveAttribute('aria-current', 'page');
  });
});
