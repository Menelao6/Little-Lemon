import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  // Setup files after the environment is loaded
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Module name mapper for aliases and CSS modules
  moduleNameMapper: {
    // Map the @/ alias to the app directory
    "^@/(.*)$": "<rootDir>/app/$1",

    // Handle CSS modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle static assets (e.g., images)
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Transform settings for JavaScript/JSX files
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  // Test environment
  testEnvironment: "jest-environment-jsdom",

  // Module file extensions
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  // Ignore specific directories
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],

  // Collect coverage
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{js,jsx,ts,tsx}",
    "!app/**/*.d.ts",
    "!app/**/*.stories.{js,jsx,ts,tsx}",
    "!app/**/_app.{js,jsx,ts,tsx}",
    "!app/**/_document.{js,jsx,ts,tsx}",
  ],
};

// Export the configuration
export default createJestConfig(customJestConfig);