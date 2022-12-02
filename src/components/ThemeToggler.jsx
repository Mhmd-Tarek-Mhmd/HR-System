import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../store/actions";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

function ThemeToggler() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <Tooltip
      arrow
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <IconButton onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggler;
