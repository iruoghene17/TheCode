import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardClasses } from "./Screens/DashboardClasses";
import { DashboardYourNotes } from "./routes/DashboardYourNotes/screens/DashboardYourNotes";

export const App = (): React.ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardClasses />} />
        <Route path="/dashboard-yournotes" element={<DashboardYourNotes />} />
      </Routes>
    </Router>
  );
};
