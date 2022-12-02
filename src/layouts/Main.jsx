import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "106px 1fr" }}>
      <Sidebar />
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />
      </Box>
    </Box>
  );
}

export default Main;
