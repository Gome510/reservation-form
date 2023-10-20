import React from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { generateHalfHourIntervals } from "./utils";

export default function DateTime({
  time,
  date,
  onTimeChange,
  onDateChange,
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

  const halfHourIntervals = generateHalfHourIntervals();

  return (
    <div className="flex justify-content-between">
      <div className="flex flex-column w-5">
        <label className="mb-1" htmlFor="time">
          Time
        </label>
        <Dropdown
          inputId="time"
          value={time}
          optionLabel="label"
          onChange={onTimeChange}
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
            className="w-full h-full"
            value={date}
            onChange={onDateChange}
            dateTemplate={dateTemplate}
          />
        </div>
      </div>
    </div>
  );
}
