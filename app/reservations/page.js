'use client';

import Navbar from "../components/Navbar/Navbar.js";
import BookingForm from "../components/BookingForm/BookingForm.js";
import Footer from "../components/HomePage/Footer.js";
import styles from "./ReservationsPage.module.css"
import { useReducer } from "react";

function updateTimes(state, action) {
  switch (action.type) {
    case "SUPDATE_TIMES":
      return ['17:00', '18:00', '19:00', '20:00', '21:00']
    default:
      return state;
  }
}

function initializeState() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00']
}

export default function Reservations() {

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeState);
  return (
    <>
      <Navbar />
      <main className={styles.reservationsPage}>
        <h1>Reserve a Table</h1>
        <p>Please fill out the form below to book your reservation.</p>
        <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} />
        </main>
      <Footer />
    </>
  );
}