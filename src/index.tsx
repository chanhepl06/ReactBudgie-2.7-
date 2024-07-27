import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@/theme/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

// Configure the class name generator to remove 'Mui' prefix
ClassNameGenerator.configure((componentName) =>
  componentName.replace("Muiend", "")
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
