import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import Modal from "./Modal";
import Feedback from "./Feedback";
import Main from "../layouts/Main";

const contrastText = "#fff";
const paletteMui = {
  error: { main: "#ff6a6a", contrastText },
  success: { main: "#27b40c", contrastText },
  primary: { main: "#2764ac", contrastText },
  warning: { main: "#23aaeb", contrastText },
};
const components = {
  MuiButton: {
    defaultProps: { disableElevation: true, variant: "contained" },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.variant === "contained" && {
          fontSize: 13,
          borderRadius: 5,
          textTransform: "unset",
        }),
      }),
    },
  },
};

function App() {
  const themeState = useSelector((state) => state.theme);
  const theme = useMemo(
    () =>
      createTheme({ components, palette: { ...paletteMui, mode: themeState } }),
    [themeState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
      <Modal />
      <Feedback />
    </ThemeProvider>
  );
}

export default App;
