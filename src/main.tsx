import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import Vercel Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      {/* Add Speed Insights at top level */}
      <SpeedInsights />

      <App />
    </>
  </React.StrictMode>
);
