import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#C9A227",
      contrastText: "#171717",
    },

    secondary: {
      main: "#171717",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F5EFE0",
      paper: "#FFFDF8",
    },

    text: {
      primary: "#242424",
      secondary: "#6B6252",
    },

    success: {
      main: "#3F8F68",
    },

    warning: {
      main: "#C58A32",
    },

    error: {
      main: "#B94A48",
    },
  },

  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',

    h4: {
      fontWeight: 700,
      color: "#242424",
    },

    h5: {
      fontWeight: 700,
      color: "#242424",
    },

    h6: {
      fontWeight: 700,
      color: "#242424",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFDF8",
          border: "1px solid rgba(201, 162, 39, 0.16)",
          boxShadow: "0 8px 24px rgba(60, 45, 15, 0.08)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFDF8",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 700,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;