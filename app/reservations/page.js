'use client';

import Navbar from "../components/Navbar/Navbar.js";
import BookingForm from "../components/BookingForm/BookingForm.js";
import Footer from "../components/HomePage/Footer.js";
import styles from "./ReservationsPage.module.css";
import { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ['17:00', '18:00', '19:00', '20:00', '21:00'];
    default:
      return state;
  }
}

function initializeState() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

// Integrated API functions
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    if (!(date instanceof Date)) {
        console.error("Invalid date object:", date);
        return [];
    }

    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export default function Reservations() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeState);
  const [isAPIReady, setIsAPIReady] = useState(true); // Since API is integrated, it's immediately ready
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
  const router = useRouter();

  useEffect(() => {
    // Fetch available times based on the selected date
    const times = fetchAPI(selectedDate);
    dispatchTimes({ type: "UPDATE_TIMES", payload: times });
  }, [selectedDate]);

  const submitForm = async (formData) => {
    // Submit booking form
    const success = submitAPI(formData);
    if (success) {
      // Redirect to confirmation page
      const queryString = new URLSearchParams(formData).toString();
      router.push(`/confirmed-booking?${queryString}`);
    } else {
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.reservationsPage}>
        <h1>Reserve a Table</h1>
        <p>Please fill out the form below to book your reservation.</p>
        {isAPIReady ? (
          <BookingForm 
            availableTimes={availableTimes} 
            dispatchTimes={dispatchTimes} 
            fetchAPI={fetchAPI}
            submitForm={submitForm} 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ) : (
          <p>Loading API functions...</p>
        )}
      </main>
      <Footer />
    </>
  );
}
