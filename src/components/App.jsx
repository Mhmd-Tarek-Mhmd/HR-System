import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import Modal from "./Modal";
import Feedback from "./Feedback";

function App() {
  const themeState = useSelector((state) => state.theme);
  const theme = useMemo(
    () => createTheme({ palette: { mode: themeState } }),
    [themeState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Modal />
      <Feedback />
    </ThemeProvider>
  );
}

export default App;
