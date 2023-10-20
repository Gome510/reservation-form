function CustomerInfo(info, handleCustomerInfoChange) {
  return (
    <div className="customer-info">
      <div className="flex flex-column md:flex-row">
        <div className="flex">
          <div className="card flex justify-content-center">
            <InputText
              value={info}
              onChange={(e) => handleCustomerInfoChange(e.target.value)}
            />
          </div>
          <div className="card flex justify-content-center">
            <InputText
              value={info}
              onChange={(e) => handleCustomerInfoChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
