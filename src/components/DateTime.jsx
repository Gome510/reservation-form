import React, { useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { generateHalfHourIntervals } from "../utils";
import { db } from "../database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const restaurantsRef = collection(db, "restaurants");

export default function DateTime({
  searchTime,
  onSearchTimeChange,
  formData,
  handleChange,
  disabledDates,
}) {
  function dateTemplate(date) {
    if (disabledDates.includes(date.day)) {
      return (
        <p style={{ color: "lightgrey", textDecoration: "line-through" }}>
          {date.day}
        </p>
      );
    }
    return date.day;
  }

  const halfHourIntervals = generateHalfHourIntervals(0, 23);

  async function getOpenHours() {
    const queryRestaurant = query(restaurantsRef, where("id", "==", "1"));

    const snapshot = await getDocs(queryRestaurant);
    snapshot.forEach((doc) => {});
  }

  return (
    <div className="flex justify-content-between">
      <div className="flex flex-column w-5">
        <label className="mb-1" htmlFor="time">
          Time
        </label>
        <Dropdown
          inputId="time"
          name="time"
          value={searchTime}
          optionLabel="label"
          onChange={(e) => onSearchTimeChange(e.value)}
          options={halfHourIntervals}
        />
      </div>
      <div className="w-5">
        <div className="card flex flex-column">
          <label className="mb-1" htmlFor="calendar">
            Date
          </label>
          <Calendar
            inputId="calendar"
            name="date"
            className="w-full h-full"
            value={formData.date}
            onChange={handleChange}
            dateTemplate={dateTemplate}
          />
        </div>
      </div>
    </div>
  );
}
