import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardClasses } from "./Screens/DashboardClasses";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DashboardClasses />
  </StrictMode>,
);
