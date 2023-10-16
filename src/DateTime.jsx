import React from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export default function DateTime({
  time,
  setTime,
  onDateChange,
  date,
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

  function generateHalfHourIntervals() {
    const intervals = [];
    const startHour = 0;
    const endHour = 23;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        let labelHour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format
        const label = `${labelHour.toString().padStart(2, "0")}:${
          minute === 0 ? "00" : minute
        } ${hour < 12 ? "AM" : "PM"}`;
        const time = { hour, minute };
        intervals.push({ label, time });
      }
    }

    return intervals;
  }

  const halfHourIntervals = generateHalfHourIntervals();

  return (
    <div className="flex justify-content-between">
      <div className="flex flex-column w-5">
        <label className="" htmlFor="time">
          Time
        </label>
        <Dropdown
          value={time}
          onChange={(e) => setTime(e.value)}
          options={halfHourIntervals}
        />
      </div>
      <div className="w-5">
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
      </div>
    </div>
  );
}
