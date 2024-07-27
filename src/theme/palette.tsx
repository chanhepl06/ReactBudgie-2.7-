// src/theme.ts
import { createTheme } from "@mui/material/styles";

const commonPalette = {
  common: {
    black: "#1A1A1A",
    white: "#fff",
  },
  text: {
    primary: "#1A1A1A",
    secondary: "#616161",
    disabled: "#BDBDBD",
  },
  divider: "#BDBDBD",
  action: {
    hover: "#E0E0E0",
    active: "#BDBDBD",
    disabled: "#F5F5F5",
    hoverOpacity: 0.08,
    disabledOpacity: 0.38,
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...commonPalette,
    primary: {
      main: "#DB2828",
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
    background: {
      default: "#FFA000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...commonPalette,
    primary: {
      main: "#004578",
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
      disabled: "#b0b0b0",
    },
    background: {
      default: "#121212",
      paper: "121212",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    htmlFontSize: 16,
    fontSize: 14,
  },
});
