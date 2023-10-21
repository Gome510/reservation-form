import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReservationForm from "./ReservationForm";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
const value = {
  ripple: false,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ReservationForm />
    </PrimeReactProvider>
  </React.StrictMode>
);
