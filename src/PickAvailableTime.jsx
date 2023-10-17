import { Button } from "primereact/button";

function PickAvailableTime({ times, onTimeChange }) {
  const timeButtons = times.map((time) => (
    <Button
      onClick={(e) => onTimeChange(e)}
      className="p-2 bg-green-600"
      size="small"
      type="button"
      key={time.label}
      value={time.time}
    >
      {time.label}
    </Button>
  ));
  //console.log(times);
  return (
    <div className="">
      <label htmlFor="available-times">Pick an Available Time</label>
      <div className="flex justify-content-between" id="available-times">
        {timeButtons}
      </div>
    </div>
  );
}

export default PickAvailableTime;
