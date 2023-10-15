import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

export default function DatePicker({
  onDateChange,
  date,
  disabledDates,
  setDisabledDates,
}) {
  useEffect(() => {
    setDisabledDates(generateRandomDays(31, 7));
  }, []);

  function generateRandomDays(daysInMonth, numDays) {
    const randomDays = [];
    for (let i = 0; i < numDays; i++) {
      const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
      randomDays.push(randomDay);
    }
    return randomDays;
  }

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

  return (
    <div className="card flex flex-column">
      <label className="" htmlFor="calendar">
        Date
      </label>
      <Calendar
        id="calendar"
        className="w-full h-full"
        value={date}
        onChange={onDateChange}
        dateTemplate={dateTemplate}
      />
    </div>
  );
}
