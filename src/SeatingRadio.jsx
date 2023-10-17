import { RadioButton } from "primereact/radiobutton";

function SeatingRadio(seating, handleSeatingChange) {
  return (
    <div className="card flex ">
      <div className="flex flex-wrap gap-3">
        <div className="flex align-items-center">
          <RadioButton
            inputId="seating1"
            name="seating"
            value="Standard"
            onChange={(e) => handleSeatingChange(e.value)}
            checked={seating === "Standard"}
          />
          <label htmlFor="seating1" className="ml-2">
            Standard
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="seating2"
            name="seating"
            value="Outdoor"
            onChange={(e) => handleSeatingChange(e.value)}
            checked={seating === "Outdoor"}
          />
          <label htmlFor="seating2" className="ml-2">
            Outdoor
          </label>
        </div>
      </div>
    </div>
  );
}

export default SeatingRadio;
