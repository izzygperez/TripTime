import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import DestinationPage from "./pages/DestinationPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={__XR_ENV_BASE__}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/webspatial/avp" element={<App />} />
        <Route path="/:country/:category" element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
