import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function MoreDetails({ employee, isShowDetails }) {
  return (
    isShowDetails && (
      <Paper
        sx={{
          p: 1,
          width: 237,
          height: 80.7,
          zIndex: 10000,
          right: "-7px",
          display: "grid",
          textAlign: "left",
          position: "absolute",
          alignItems: "center",
          top: "calc(100% + 6px)",
          gridTemplateColumns: "repeat(3, 1fr)",
          "&::before": {
            content: '""',
            right: 10,
            top: "-30px",
            borderWidth: 15,
            position: "inherit",
            borderStyle: "solid",
            borderColor: "transparent",
            borderBottomColor: "background.paper",
            backgroundImage: ({ palette }) =>
              palette.mode !== "light" &&
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          },
        }}
      >
        <MoreDetailsItem title="Office" subtitle={employee.office} />
        <MoreDetailsItem title="Role" subtitle={employee.role} />
        <MoreDetailsItem title="Copied Manger" subtitle={employee.manger} />
        <MoreDetailsItem title="Joining Date" subtitle={employee.date} />
        <MoreDetailsItem title="Manger" subtitle={employee.manger} />
      </Paper>
    )
  );
}

export default MoreDetails;

const MoreDetailsItem = ({ title, subtitle }) => (
  <Box>
    <Typography
      component="label"
      sx={{ color: "#5c6974", fontSize: 10, display: "block" }}
    >
      {title}
    </Typography>
    <Typography component="strong" sx={{ fontSize: 10, display: "block" }}>
      {subtitle}
    </Typography>
  </Box>
);
