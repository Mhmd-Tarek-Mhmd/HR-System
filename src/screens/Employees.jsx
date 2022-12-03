import { useDispatch, useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";

import { openModal, closeModal } from "../store/actions";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Form from "../components/employees/Form";
import Grid from "../components/employees/Grid";
import Toolbar from "../components/employees/Toolbar";

function Employees() {
  const dispatch = useDispatch();
  const stateEmployees = useSelector((state) => state.employees) || [];
  const [employees, setEmployees] = useState(stateEmployees);

  const updateEmployees = (updated) =>
    setEmployees(
      updated
        ? stateEmployees.map((em) =>
            em.id === updated.id ? updated : employeeProp
          )
        : stateEmployees
    );
  const handleCloseModal = () => dispatch(closeModal());
  const handleModalOpen = (employee) => {
    dispatch(
      openModal({
        children: (
          <Form
            employeeProp={employee}
            updateEmployees={updateEmployees}
            handleCloseModal={handleCloseModal}
          />
        ),
      })
    );
  };

  useLayoutEffect(updateEmployees, [stateEmployees.length]);

  return (
    <Box
      component="section"
      sx={{
        pt: 4,
        height: 1,
        backgroundColor: ({ palette }) => palette.mode === "light" && "#f7f8f9",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          setEmployees={setEmployees}
          stateEmployees={stateEmployees}
          handleModalOpen={handleModalOpen}
        />
        <Grid
          employees={employees}
          stateEmployees={stateEmployees}
          handleModalOpen={handleModalOpen}
        />
      </Container>
    </Box>
  );
}

export default Employees;
