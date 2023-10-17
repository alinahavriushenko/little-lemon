import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { submitAPI } from '../assets/api';
import BookingForm from '../assets/components/BookingForm';

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Update availableTimes based on the selected date (action.date)
      // For now, return the same available times regardless of the date
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];

    default:
      return state;
  }
}

// Create a function to initialize the initial state for availableTimes
function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

export default function Reservations() {

 const navigate = useNavigate();
  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  };



  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  return (
    <div>
      <div className='booking-txt'>
    <h1>Welcome to our online reservation page!</h1>
    <h3>Reserve your table now and prepare to savor the flavors of an exquisite meal.</h3>
    </div>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
</div>
  )
};
