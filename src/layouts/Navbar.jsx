import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";

import ThemeToggler from "../components/ThemeToggler";

const users = [
  { name: "Ahmed Khaled", photoURL: "" },
  { name: "John Doe", photoURL: "" },
  { name: "Jane Doe", photoURL: "" },
];

function Navbar() {
  return (
    <Box component="nav" sx={{ height: 80 }}>
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            pt: 1,
            rowGap: 1,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            sx={{
              mr: 6.125,
              color: ({ palette }) => palette.mode === "light" && "#474747",
            }}
          >
            Thursday, 03 Oct 02:08:07 PM
          </Typography>
          <Button color="success" sx={{ width: 94, height: 27 }}>
            Sign in
          </Button>

          {/* Icon Buttons */}
          <Box
            sx={{
              px: 0.5,
              ml: 3.0625,
              mr: 1.5625,
              columnGap: 1,
              display: "flex",
              position: "relative",
              borderInline: "solid 0.5px #e8e4e4",
              "&::before": {
                content: '""',
                top: 0,
                left: "50%",
                width: "1px",
                height: "100%",
                position: "absolute",
                backgroundColor: "#e8e4e4",
                transform: "translateX(-50%)",
              },
            }}
          >
            <ThemeToggler />
            <NotificationsButton />
          </Box>

          {/* User */}
          <Select
            value={users[0].name}
            sx={{ "*": { border: "none" } }}
            inputProps={{
              sx: {
                p: 1,
                pr: 4,
                columnGap: 1,
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            {users.map((user) => (
              <MenuItem
                key={user.name}
                name={user.name}
                value={user.name}
                sx={{ columnGap: 1 }}
              >
                <Avatar
                  src={user.photoURL}
                  alt={`Avatar of ${user.name}`}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography
                  sx={{
                    color: ({ palette }) =>
                      palette.mode === "light" && "#8997a4",
                  }}
                >
                  {user.name}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Navbar;

const NotificationsButton = () => (
  <Tooltip arrow title="Notifications">
    <IconButton>
      <Badge badgeContent={1} color="success">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  </Tooltip>
);
