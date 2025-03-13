import React from 'react';
import { render, screen } from '@testing-library/react';  // Changed import
import BookingForm from "../components/BookingForm/BookingForm.js";  // Changed import

// Mock the CSS module
jest.mock('../components/BookingForm/BookingForm.module.css', () => ({}));

const mockDispatchTimes = jest.fn();
const mockAvailableTimes = ["17:00", "18:00", "19:00"];

test("BookingForm renders correctly", () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatchTimes={mockDispatchTimes}
    />
  );

  // Use exact text match with string arguments
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
  expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
});