// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#107C10",
      light: "#6CB2F6",
      dark: "#004578",
      contrastText: "#fff",
    },
    secondary: {
      main: "#107C10",
      light: "#BFFFBE",
      dark: "#0A530A",
      contrastText: "#fff",
    },
    error: {
      main: "#DB2828",
      light: "#FCEFEF",
      dark: "#A82727",
      contrastText: "#fff",
    },
    info: {
      main: "#00B8D4",
      light: "#B3E5FC",
      dark: "#008BA4",
      contrastText: "#fff",
    },
    success: {
      main: "#43A047",
      light: "#E8F5E9",
      dark: "#337E33",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFC107",
      light: "#FFF59D",
      dark: "#FFA000",
      contrastText: "#fff",
    },
    text: {
      primary: "#303030",
      secondary: "#fff",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#002a5c",
      light: "#6CB2F6",
      dark: "#002a5c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0A530A",
      light: "#BFFFBE",
      dark: "#004000",
      contrastText: "#fff",
    },
    error: {
      main: "#A82727",
      light: "#FCEFEF",
      dark: "#7A0E0E",
      contrastText: "#fff",
    },
    info: {
      main: "#008BA4",
      light: "#B3E5FC",
      dark: "#005377",
      contrastText: "#fff",
    },
    success: {
      main: "#337E33",
      light: "#E8F5E9",
      dark: "#004d00",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFA000",
      light: "#FFF59D",
      dark: "#FF6F00",
      contrastText: "#fff",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#b0b0b0",
    },
    background: {
      default: "#303030",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});
