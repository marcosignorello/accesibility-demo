module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
     // Add mappings for other aliases if used, e.g., types, translations
    '^../types/(.*)$': '<rootDir>/src/app/types/$1',
    '^../translations/(.*)$': '<rootDir>/src/app/translations/$1',
    '^./Sidebar$': '<rootDir>/src/app/components/Sidebar.tsx',
    '^./AttributeDetails$': '<rootDir>/src/app/components/AttributeDetails.tsx',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
