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
import CustomerInfo from "./CustomerInfo";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    peopleCount: 1,
    date: new Date(),
    time: {},
    seating,

    // Add other form fields here
  });

  const [disabledDates, setDisabledDates] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [seating, setSeating] = useState("");
  const [customerInfo, setCustomerInfo] = useState({});

  useEffect(() => {
    setDisabledDates(generateRandomDays(31, 7));
  }, []);

  useEffect(() => {
    const halfHourIntervals = generateHalfHourIntervals();
    setDisabledTimes(generateRandomTimes(halfHourIntervals, 5));
  }, [formData.date]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e, selectedTime) {
    e.preventDefault();

    console.log("Form submitted with the following data:");
    console.log("Number of People:", formData.peopleCount);
    console.log("Date:", formatDateToUSFormat(formData.date));
    console.log("Time:", selectedTime);
    // Add other form field values here
  }

  function handleFindTime() {
    const availableTimes = getNearestTimes(
      formData.time,
      generateHalfHourIntervals(),
      disabledTimes,
      5
    );
    setAvailableTimes(availableTimes);
  }

  // Add other form field change functions

  console.log(formData.time);

  return (
    <div className="w-30rem m-auto border-solid surface-border border-round p-3">
      <h2 className="pb-3 border-bottom-2 border-300 text-center">
        Make a reservation
      </h2>
      <form onSubmit={(e) => handleSubmit(e, selectedTime)}>
        <div className="flex flex-column">
          <label className="mb-1" htmlFor="peopleCount">
            Party Size
          </label>
          <input
            className="p-2 mt-2 mb-2 border-none border-bottom-2 border-300 h-2rem"
            type="number"
            id="peopleCount"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            min={1}
            max={20}
          />
        </div>

        <DateTime
          formData={formData}
          handleChange={handleChange}
          disabledDates={disabledDates}
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
            onTimeChange={handleChange} // You can update this to match your PickAvailableTime component
          />
        )}

        {seating && (
          <>
            <SeatingRadio
              seating={seating}
              handleSeatingChange={handleChange} // You can update this to match your SeatingRadio component
            />
            <CustomerInfo
              info={customerInfo}
              handleCustomerInfoChange={setCustomerInfo}
            />
          </>
        )}
      </form>
    </div>
  );
};

export default ReservationForm;
