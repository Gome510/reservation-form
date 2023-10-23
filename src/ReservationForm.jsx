import React, { useState, useEffect } from "react";
import DateTime from "./components/DateTime";
import {
  generateRandomDays,
  generateHalfHourIntervals,
  generateRandomTimes,
  getNearestTimes,
  formatDateToUSFormat,
} from "./utils";
import PickAvailableTime from "./components/PickAvailableTime";
import SeatingRadio from "./components/SeatingRadio";
import CustomerInfo from "./components/CustomerInfo";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useContext } from "react";
import { useMountEffect } from "primereact/hooks";
import { PrimeReactContext } from "primereact/api";
import { Ripple } from "primereact/ripple";

function ReservationForm() {
  const [formData, setFormData] = useState({
    peopleCount: 1,
    date: new Date(),
    time: "",
    seating: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    occasion: "",
    specialRequest: "",

    // Add other form fields here
  });
  const [searchTime, setSearchTime] = useState({});
  const [disabledDates, setDisabledDates] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setDisabledDates(generateRandomDays(31, 7));
  }, []);

  useEffect(() => {
    const halfHourIntervals = generateHalfHourIntervals();
    setDisabledTimes(generateRandomTimes(halfHourIntervals, 5));
  }, [formData.date]);

  useMountEffect(() => {
    setRipple(true);
  });

  const { setRipple } = useContext(PrimeReactContext);

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
  }

  function handleFindTime() {
    const availableTimes = getNearestTimes(
      searchTime,
      generateHalfHourIntervals(),
      disabledTimes,
      5
    );
    setAvailableTimes(availableTimes);
  }

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
          <InputNumber
            id="peopleCount"
            className="mt-2 mb-2"
            name={formData.peopleCount}
            value={formData.peopleCount}
            onValueChange={handleChange}
            min={1}
            max={20}
          />
        </div>

        <DateTime
          searchTime={searchTime}
          onSearchTimeChange={setSearchTime}
          formData={formData}
          handleChange={handleChange}
          disabledDates={disabledDates}
        />

        <div className="flex mb-2 text-center ">
          <Button
            className="w-12 bg-green-700 flex justify-content-center  h-3rem mt-3"
            type="button"
            onClick={handleFindTime}
          >
            Find a Time
            <Ripple />
          </Button>
        </div>

        {availableTimes.length > 0 && (
          <PickAvailableTime
            times={availableTimes}
            formData={formData}
            onTimeChange={handleChange}
          />
        )}

        {formData.time != "" && (
          <SeatingRadio
            seating={formData.seating}
            handleSeatingChange={handleChange}
          />
        )}

        {formData.seating != "" && (
          <CustomerInfo formData={formData} handleChange={handleChange} />
        )}

        {formData.email != "" &&
          formData.phoneNumber != "" &&
          formData.firstName != "" &&
          formData.lastName && (
            <div className="flex justify-content-center ">
              <Button className="bg-green-700">Reserve</Button>
            </div>
          )}
      </form>
    </div>
  );
}

export default ReservationForm;
