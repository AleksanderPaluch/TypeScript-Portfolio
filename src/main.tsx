import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import React, { StrictMode } from "react";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (rootElement instanceof HTMLElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
