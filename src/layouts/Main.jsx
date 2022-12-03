import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Screens from "../screens";

function Main() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "106px 1fr" }}>
      <Sidebar />
      <Box sx={{ display: "inherit", gridTemplateRows: "max-content 1fr" }}>
        <Navbar />
        <Screens />
      </Box>
    </Box>
  );
}

export default Main;
