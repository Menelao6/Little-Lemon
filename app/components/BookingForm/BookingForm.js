'use client';

import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, dispatchTimes }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        dispatchTimes({ type: "UPDATE_TIMES", date: selectedDate});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${guests} guests on ${date} at ${time} for ${occasion}`);
    };


    return (
        <>
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
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}required>
                <option value="">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <button type="submt" className={styles.submitButton}>Submit Reservation</button>
        </form>
        </>
    )
}