import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import DestinationPage from "./pages/DestinationPage.tsx";
import "./index.css";
import CulturePage from "./pages/CulturePage.tsx";
import ActivitiesPage from "./pages/ActivitiesPage.tsx";
import EatDrinkPage from "./pages/EatDrinkpage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination/culture" element={<CulturePage />} />
        <Route path="/destination/activities" element={<ActivitiesPage />} />
        <Route path="/destination/eat-drink" element={<EatDrinkPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
