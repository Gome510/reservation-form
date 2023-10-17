import React, { useState, useEffect } from "react";
import DateTime from "./DateTime";
import {
  generateRandomDays,
  generateHalfHourIntervals,
  generateRandomTimes,
  getNearestTimes,
  formatDateToUSFormat,
} from "./utils";
import PickAvailableTime from "./PickAvailableTime";
import SeatingRadio from "./SeatingRadio";

const ReservationForm = () => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [disabledDates, setDisabledDates] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [seating, setSeating] = useState("");

  useEffect(() => {
    setDisabledDates(generateRandomDays(31, 7));
  }, []);

  useEffect(() => {
    const halfHourIntervals = generateHalfHourIntervals();
    setDisabledTimes(generateRandomTimes(halfHourIntervals, 5));
  }, [date]);

  function handlePeopleCountChange(e) {
    setPeopleCount(e.target.value);
  }

  function handleSubmit(e, selectedTime) {
    e.preventDefault();

    console.log("Form submitted with the following data:");
    console.log("Number of People:", peopleCount);
    console.log("Date:", formatDateToUSFormat(date));
    console.log("Time:", selectedTime);
  }

  function handleFindTime() {
    const availableTimes = getNearestTimes(
      time,
      generateHalfHourIntervals(),
      disabledTimes,
      5
    );
    setAvailableTimes(availableTimes);
  }

  function onDateChange(e) {
    if (!disabledDates.includes(e.value.getDate())) {
      setDate(e.value);
    }
  }

  function onTimeChange(e) {
    setTime(e.value);
  }

  function handleSeatingChange(e) {
    setSeating(e.value);
  }

  console.log(time);
  return (
    <div className="w-30rem m-auto border-solid surface-border border-round p-3">
      <h2 className="pb-3 border-bottom-2 border-300 text-center">
        Make a reservation
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column">
          <label className="" htmlFor="peopleCount">
            Party Size
          </label>
          <input
            className="p-2 mt-2 mb-2 border-none border-bottom-2 border-300 h-2rem"
            type="number"
            id="peopleCount"
            name="peopleCount"
            value={peopleCount}
            onChange={handlePeopleCountChange}
            min={1}
            max={20}
          />
        </div>

        <DateTime
          time={time}
          onTimeChange={onTimeChange}
          date={date}
          disabledDates={disabledDates}
          onDateChange={onDateChange}
        />

        <div className="flex justify-content-center mb-2">
          <button
            className="w-12 bg-green-700 text-white font-bold border-round border-none h-3rem mt-3"
            type="button"
            onClick={handleFindTime}
          >
            Find a Time
          </button>
        </div>

        {availableTimes.length > 0 && (
          <PickAvailableTime
            times={availableTimes}
            onTimeChange={onTimeChange}
          />
        )}

        {seating && (
          <SeatingRadio
            seating={seating}
            handleSeatingChange={handleSeatingChange}
          />
        )}
      </form>
    </div>
  );
};

export default ReservationForm;
