// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667EEA", // اللون الأساسي
    },
    secondary: {
      main: "#F6E05E", // اللون الثانوي / Accent
    },
    background: {
      default: "#F7FAFC", // خلفية الصفحة
      paper: "#FFFFFF",  // خلفية الـ Card / Paper
    },
    text: {
      primary: "#2D3748", // النص الأساسي
      secondary: "#718096", // النص الثانوي
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
});

export default theme;