import React, { useState } from "react";
import DatePicker from "./DatePicker";

const ReservationForm = () => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [date, setDate] = useState(new Date());
  const [disabledDates, setDisabledDates] = useState([]);

  const handlePeopleCountChange = (e) => {
    setPeopleCount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with the following data:");
    console.log("Number of People:", peopleCount);
    console.log("Date:", date);
    console.log("Time:", time);
  };

  function onDateChange(e) {
    if (!disabledDates.includes(e.value.getDate())) {
      setDate(e.value);
    }
  }

  return (
    <div className="w-30rem m-auto border-solid surface-border border-round p-3">
      <h2 className="pb-3 border-bottom-2 border-300 text-center">
        Make a reservation
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column">
          <label className="" htmlFor="peopleCount">
            Party Size:
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

        <div>
          <div>
            <label className="" htmlFor="time">
              Pick a Time:
            </label>
          </div>
          <div>
            <DatePicker
              date={date}
              disabledDates={disabledDates}
              onDateChange={onDateChange}
              setDisabledDates={setDisabledDates}
            />
          </div>
        </div>

        <div className="flex justify-content-center">
          <button
            className="w-12 bg-green-700 text-white font-bold border-round border-none h-3rem mt-3"
            type="submit"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
