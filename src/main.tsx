import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import AppRoutes from "./router/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
