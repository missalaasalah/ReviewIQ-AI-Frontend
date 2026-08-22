import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";

import App from "./App";
import theme from "./theme";

import { LanguageProvider } from "./i18n/LanguageContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);