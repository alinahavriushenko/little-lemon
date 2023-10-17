import React from "react";
import { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from '../api';


export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
    const [availableTimesForDate, setAvailableTimesForDate] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion !== "";

  const isValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  setIsFormValid(isValid);
};



useEffect(() => {
  if (date) {
    const selectedDate = new Date(date);

    fetchAPI(selectedDate)
      .then((times) => {
        setAvailableTimesForDate(times);
        if (times.length > 0) {
          setTime(times[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching available times:", error);
      });
  }
}, [date]);


    const formData = {
      date,
      time,
      guests,
      occasion,
    };

const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        aria-label="Choose date"

        onChange={(e) => {setDate(e.target.value)
        validateForm()}}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} aria-label="Choose time" onChange={(e) => setTime(e.target.value)}>
        {availableTimesForDate.map((timeOption, index) => (
          <option key={index} value={timeOption} >
            {timeOption}
          </option>
        ))}
      </select>


      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        aria-label="Choose number of guests"
        onChange={(e) => {setGuests(parseInt(e.target.value))
        validateForm()}}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        aria-label="Choose occasion"
        onChange={(e) => {setOccasion(e.target.value)
        validateForm()}}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit"
       value="Make Your Reservation"
       disabled={!isFormValid}
       aria-label="Submit reservation"
 />
    </form>
  );
}