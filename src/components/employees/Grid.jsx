import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import GridMui from "@mui/material/Grid";

import Card from "./Card";

function Grid({ stateEmployees, employees, handleModalOpen }) {
  return Boolean(employees.length && stateEmployees.length) ? (
    <Box>
      <GridMui container spacing={3}>
        {employees.map((employee) => (
          <GridMui item key={employee.id} lg={4} md={6} xs={12}>
            <Card employee={employee} handleModalOpen={handleModalOpen} />
          </GridMui>
        ))}
      </GridMui>
    </Box>
  ) : (
    <Alert severity="warning" sx={{ mx: "auto", maxWidth: 300 }}>
      {!stateEmployees.length
        ? "No employees added yet"
        : "No employees matched"}
    </Alert>
  );
}

export default Grid;
