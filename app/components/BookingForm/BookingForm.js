'use client';

import { useState, useEffect } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, dispatchTimes, fetchAPI, submitAPI }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    if (typeof fetchAPI === "function") {
      console.log("Fetching available times for date:", date);
      const times = fetchAPI(date);
      console.log("Available times:", times);
      dispatchTimes({ type: "UPDATE_TIMES", times });
    } else {
      console.error("fetchAPI is not defined");
    }
  }, [date, fetchAPI, dispatchTimes]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    if (typeof fetchAPI === "function") {
      console.log("Fetching available times for date:", selectedDate);
      const times = fetchAPI(selectedDate);
      console.log("Available times:", times);
      dispatchTimes({ type: "UPDATE_TIMES", times });
    } else {
      console.error("fetchAPI is not defined");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    console.log("Form data:", formData);

    if (typeof submitAPI === "function") {
      console.log("Calling submitAPI...");
      const success = await submitAPI(formData);
      console.log("Submission result:", success);

      if (success) {
        alert(`Booking confirmed for ${guests} guests on ${date} at ${time} for ${occasion}`);
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    } else {
      console.error("submitAPI is not defined");
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