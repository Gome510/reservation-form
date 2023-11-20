export function generateHalfHourIntervals(startHour, endHour) {
  const intervals = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      //12-hour format
      const newHour =
        hour > 12
          ? (hour - 12).toString().padStart(2, "0")
          : hour.toString().padStart(2, "0");

      const label = `${newHour}:${minute === 0 ? "00" : minute} ${
        hour < 12 ? "AM" : "PM"
      }`;
      const time = { hour, minute };
      intervals.push({ label, time });
    }
  }

  return intervals;
}

export function generateRandomDays(daysInMonth, numDays) {
  const randomDays = [];
  for (let i = 0; i < numDays; i++) {
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
    randomDays.push(randomDay);
  }
  return randomDays;
}

export function generateRandomTimes(intervalList, count) {
  if (count <= 0) {
    return [];
  }

  const randomTimes = [];
  const intervalCount = intervalList.length;

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * intervalCount);
    randomTimes.push(intervalList[randomIndex]);
  }

  return randomTimes;
}

export function getNearestTimes(
  selectedTime,
  intervalList,
  disabledTimes,
  count
) {
  if (count <= 0) {
    return [];
  }

  // Filter out disabled times from the intervalList
  const validIntervals = intervalList.filter(
    (interval) =>
      !disabledTimes.some(
        (disabledTime) => disabledTime.label === interval.label
      )
  );

  if (validIntervals.length === 0) {
    return [];
  }

  // Find the index of the selected time in the valid intervals
  const selectedIndex = validIntervals.findIndex(
    (interval) => interval.label === selectedTime.label
  );

  if (selectedIndex === -1) {
    return [];
  }

  const nearestTimes = [];
  const intervalCount = validIntervals.length;

  for (let i = 0; i < count; i++) {
    // Calculate the index of the nearest time
    const nearestIndex = selectedIndex + i;
    if (nearestIndex < intervalCount) {
      nearestTimes.push(validIntervals[nearestIndex]);
    }
  }

  return nearestTimes;
}

export function formatDateToUSFormat(date) {
  if (date instanceof Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so we add 1.
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return ""; // Return an empty string if the date is not a valid Date object.
}
