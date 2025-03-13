import '@testing-library/jest-dom/extend-expect';

// Mock next/image to prevent test crashes
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));