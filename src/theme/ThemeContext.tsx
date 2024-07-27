import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/theme";

interface ThemeContextType {
    mode: "light" | "dark";
    tooglemode: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeContextType["mode"]>("light");
   const theme: Theme = useMemo(
     () => (mode === "light" ? lightTheme : darkTheme),
     [mode]
   );

  const tooglemode = () => {
    setMode((prev)=>(prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ mode, tooglemode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
