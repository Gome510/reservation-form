import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
function CustomerInfo({ formData, handleChange }) {
  return (
    <div className="customer-info mb-1">
      <label htmlFor="details">Details</label>
      <div className="flex flex-column" id="details">
        <div className="flex flex-column md:flex-row">
          <InputText
            className="mb-1 mt-1 w-12"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
          />

          <InputText
            className="mb-1 mt-1 w-12"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-column md:flex-row">
          <InputMask
            className="mb-1 mt-1 w-12"
            placeholder="Phone Number"
            name="phoneNumber"
            mask="(999) 999-9999"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
          />

          <InputText
            className="mb-1 mt-1 w-12"
            placeholder="Email"
            keyfilter="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-column md:flex-row">
          <InputText
            className="mb-1 mt-1 w-12"
            placeholder="Occasion"
            name="occasion"
            value={formData.occasion}
            onChange={(e) => handleChange(e)}
          />

          <InputText
            className="mb-1 mt-1 w-12"
            placeholder="Special Requests"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
