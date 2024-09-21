"use client";

import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const theme = createTheme({
  palette: {
    mode: "dark", // Light or dark theme
    primary: {
      main: "#1976d2", // Primary color
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff", // Text color on primary
    },
    secondary: {
      main: "#9c27b0", // Secondary color
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff", // Text color on secondary
    },
    error: {
      main: "#d32f2f", // Error color
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#ffffff", // Text color on error
    },
    warning: {
      main: "#ff9800", // Warning color
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#000000", // Text color on warning
    },
    info: {
      main: "#0288d1", // Info color
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#ffffff", // Text color on info
    },
    success: {
      main: "#388e3c", // Success color
      light: "#4caf50",
      dark: "#2e7d32",
      contrastText: "#ffffff", // Text color on success
    },
    background: {
      default: "#fafafa", // Default background color
      paper: "#ffffff", // Background for paper components
    },
    text: {
      primary: "#000000", // Main text color
      secondary: "#757575", // Secondary text color
      disabled: "#bdbdbd", // Disabled text color
    },
    divider: "#e0e0e0", // Divider color
  },
  typography: {
    fontFamily: geistSans.style.fontFamily, // Custom font family
    h1: {
      fontSize: "3rem", // Heading 1
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2.125rem", // Heading 2
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "1.75rem", // Heading 3
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.5rem", // Heading 4
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.25rem", // Heading 5
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1rem", // Heading 6
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.0075em",
    },
    body1: {
      fontSize: "1rem", // Normal body text
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem", // Secondary body text
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.875rem", // Button text
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem", // Caption text
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem", // Overline text
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation
          borderRadius: "8px", // Custom border radius for buttons
        },
      },
      defaultProps: {
        disableRipple: true, // Disable button ripple effect
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px", // Default padding for paper components
          borderRadius: "8px", // Custom border radius for paper
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", // Custom app bar color
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1", // Map h1 variant to HTML h1 tag
          h2: "h2", // Map h2 variant to HTML h2 tag
          h3: "h3", // Map h3 variant to HTML h3 tag
          h4: "h4", // Map h4 variant to HTML h4 tag
          h5: "h5", // Map h5 variant to HTML h5 tag
          h6: "h6", // Map h6 variant to HTML h6 tag
          body1: "p", // Map body1 variant to HTML p tag
          body2: "p", // Map body2 variant to HTML p tag
        },
      },
    },
  },
});


export default theme;
