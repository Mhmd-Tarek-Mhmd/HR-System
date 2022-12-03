import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ToolbarMui from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function Toolbar({ stateEmployees, setEmployees, handleModalOpen }) {
  const handleChange = (e) => {
    setEmployees(
      stateEmployees.filter((employee) =>
        employee.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <ToolbarMui disableGutters sx={{ columnGap: 1 }}>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search"
        onChange={handleChange}
        aria-label="Search for a employee"
        disabled={!Boolean(stateEmployees.length)}
        sx={{
          flex: 1,
          backgroundColor: ({ palette }) => palette.mode === "light" && "#fff",
        }}
        InputProps={{
          sx: { outline: "none", height: 30, boxSizing: "border-box" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                color="warning"
                fontSize="small"
                sx={{ opacity: !stateEmployees.length && 0.3 }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Button
        startIcon={<Add />}
        sx={{ maxHeight: 30 }}
        onClick={() => handleModalOpen()}
      >
        Add new
      </Button>
    </ToolbarMui>
  );
}

export default Toolbar;
