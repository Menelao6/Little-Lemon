'use client';

import { useSearchParams } from 'next/navigation';
import styles from './ConfirmedBooking.module.css';
import buttonStyles from "../components/Shared/Button.module.css";

export default function ConfirmedBooking() {
  const searchParams = useSearchParams();
  
  // Get parameters from URL
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const guests = searchParams.get('guests');
  const occasion = searchParams.get('occasion');

  return (
    <div className={styles.confirmedBooking}>
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been succesfully booked for: </p>
      <p>{guests} guests on {date} at {time} for {occasion}</p>
      <p>Thank you for choosing Little Lemon App!</p>
      <button className={buttonStyles.btn} onClick={() => window.location.href = '/'}>Home Page</button>
    </div>
  );
}