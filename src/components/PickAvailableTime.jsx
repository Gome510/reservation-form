import { Button } from "primereact/button";

function PickAvailableTime({ times, formData, onTimeChange }) {
  const bgGreen = "p-2 bg-green-600";
  const bgGray = "p-2 bg-gray-500";
  const timeButtons = times.map((time) => (
    <Button
      onClick={(e) => onTimeChange(e)}
      className={
        formData.time == time.label || formData.time == "" ? bgGreen : bgGray
      }
      size="small"
      type="button"
      name="time"
      key={time.label}
      value={time.label}
    >
      {time.label}
    </Button>
  ));

  const bgGrey = {
    backgroundColor: "grey",
  };

  return (
    <div className="mb-2">
      <label className="" htmlFor="available-times">
        Pick an Available Time
      </label>
      <div className="flex justify-content-between mt-1" id="available-times">
        {timeButtons}
      </div>
    </div>
  );
}

export default PickAvailableTime;
