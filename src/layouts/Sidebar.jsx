import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SvgIcon from "@mui/material/SvgIcon";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import TvIcon from "@mui/icons-material/Tv";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const items = [
  {
    title: "Dashboard",
    icon: <DashboardIcon fontSize="large" sx={{ mx: "auto", color: "#fff" }} />,
  },
  {
    title: "Workplace",
    icon: <TvIcon fontSize="large" sx={{ mx: "auto", color: "#fff" }} />,
  },
  {
    title: "Holidays",
    icon: <LocalCafeIcon fontSize="large" sx={{ mx: "auto", color: "#fff" }} />,
  },
  {
    title: "Employees",
    icon: <GroupIcon fontSize="large" sx={{ mx: "auto", color: "#fff" }} />,
  },
  {
    title: "Inbound Requests",
    icon: <HandsIcons sx={{ mb: 1, mx: "auto", fill: "#fff", transform: "scale(1.5)" }} />,
  },
];

function Sidebar() {
  return (
    <Box
      component="aside"
      sx={{ pt: 10, display: "grid", overflow: "hidden", backgroundImage: "linear-gradient(to bottom, #39a4dc, #2763ab)" }}
    >
      <List>
        {items.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;

const Item = ({ item: { title, icon } }) => {
  return (
    <ListItem
      selected={title === "Employees"}
      sx={{
        mb: 1,
        color: "#fff",
        textAlign: "center",
        flexDirection: "column",
        "&:hover": { backgroundColor: "#2765ac", borderLeft: "2px solid", borderLeftColor: "success.main" },
        "&.Mui-selected": { backgroundColor: "#2765ac", borderLeft: "2px solid", borderLeftColor: "success.main" },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};

function HandsIcons({ sx }) {
  return (
    <SvgIcon viewBox="0 0 640 512" sx={sx}>
      {/* Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
      <path d="M80 104c0-22.1-17.9-40-40-40S0 81.9 0 104v56 64V325.5c0 25.5 10.1 49.9 28.1 67.9L128 493.3c12 12 28.3 18.7 45.3 18.7H240c26.5 0 48-21.5 48-48V385.1c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3 0 0-15.2-15.2-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32 15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1L98.7 309.5c-12-12-18.7-28.3-18.7-45.3V224 144 104zm480 0v40 80 40.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2 32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32-15.2 15.2 0 0-25.3 25.3c-21 21-32.8 49.5-32.8 79.2V464c0 26.5 21.5 48 48 48h66.7c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9V224 160 104c0-22.1-17.9-40-40-40s-40 17.9-40 40z"/>
    </SvgIcon>
  );
}
