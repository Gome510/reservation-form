import { Button } from "primereact/button";

function PickAvailableTime({ times, handleSubmit }) {
  const timeButtons = times.map((time) => (
    <Button
      onClick={(e) => handleSubmit(e, time.label)}
      className="p-2 bg-green-600"
      size="small"
      key={time.label}
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
