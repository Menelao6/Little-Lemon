'use client';

import { useState, useEffect } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, dispatchTimes, fetchAPI, submitForm, selectedDate, setSelectedDate }) {
  const [date, setDate] = useState(selectedDate.toISOString().split("T")[0]); // Default to today
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    if (typeof fetchAPI === "function") {
      const times = fetchAPI(new Date(date));
      dispatchTimes({ type: "UPDATE_TIMES", times });
    }
  }, [date, fetchAPI, dispatchTimes]);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate.toISOString().split("T")[0]);
    setSelectedDate(selectedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (typeof submitForm === "function") {
    await submitForm(formData);
    } else {
      console.error("submitForm is not defined");
    }
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />
      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min={1}
        max={10}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <button type="submit" className={styles.submitButton}>
        Submit Reservation
      </button>
    </form>
  );
}