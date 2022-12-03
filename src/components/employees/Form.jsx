import { useReducer } from "react";
import { useDispatch } from "react-redux";

import { openBackdrop, closeBackdrop, add, update } from "../../store/actions";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { visuallyHidden } from "@mui/utils";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

import Input from "../Input";

const offices = ["office1", "office2"];
const departments = ["department1", "department2"];
const attendances = ["Present", "Absent", "Weekend", "Holiday"];
const roles = ["role1", "role2", "role3"];
const positions = ["position1", "position2"];
const mangers = ["manger1", "manger2"];

const initialState = {
  date: "",
  email: "",
  attendance: "",
  department: "",
  isRemote: "",
  manger: "",
  name: "",
  office: "",
  phone: "",
  role: "",
  position: "",
  photoURL: "",
  id: Math.random() * Math.random(),
};

function Form({ employeeProp, updateEmployees, handleCloseModal }) {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useReducer(
    (state, { type, payload }) => ({ ...state, [type]: payload }),
    employeeProp || initialState
  );

  const handleChange = ({ target }) => {
    setEmployee({
      type: target.name,
      payload: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const handleImageChange = ({ target }) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setEmployee({
        type: target.name,
        payload: e.target.result,
      });
    };
    reader.readAsDataURL(target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openBackdrop());

    const action = employeeProp ? update : add;
    dispatch(action(employee));
    updateEmployees && updateEmployees(employee);

    handleCloseModal();
    let timer = setTimeout(() => {
      dispatch(closeBackdrop());
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div>
      <Typography
        component="h2"
        variant="h5"
        color="warning.main"
        sx={{ borderBottom: "1px solid" }}
      >
        NEW EMPLOYEE
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Fieldset title="Personal Info">
          <Grid container spacing={2}>
            <Grid
              item
              md={4}
              xs={12}
              component="label"
              sx={{
                p: 0,
                display: "grid",
                textAlign: "center",
                placeItems: "center",
                border: "1px dashed",
                borderColor: "divider",
                backgroundSize: "cover",
                height: { xs: 100, md: 264, lg: 124 },
                color: ({ palette }) => palette.mode === "light" && "#5c6974",
                backgroundImage:
                  employee.photoURL && `url(${employee.photoURL})`,
              }}
            >
              {!employee.photoURL && "UPLOAD OR DRAG IMAGE HERE"}
              <TextField
                type="file"
                name="photoURL"
                sx={visuallyHidden}
                onChange={handleImageChange}
                inputProps={{ accept: "image/*" }}
              />
            </Grid>
            <Grid item md={8} xs={12} sx={{ pt: { md: "0 !important" } }}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <Input
                    name="name"
                    label="Name"
                    value={employee.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Input
                    name="date"
                    type="date"
                    label="Start Date"
                    value={employee.date}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Input
                    name="phone"
                    type="tel"
                    label="Phone"
                    value={employee.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    value={employee.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fieldset>

        <Fieldset title="Office Info">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="office"
                type="select"
                label="Office"
                options={offices}
                value={employee.office}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="department"
                type="select"
                label="Department"
                options={departments}
                value={employee.department}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="attendance"
                type="select"
                label="Attendance profile"
                options={attendances}
                value={employee.attendance}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="role"
                type="select"
                label="Role"
                options={roles}
                value={employee.role}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="position"
                type="select"
                label="Position"
                options={positions}
                value={employee.position}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="manger"
                type="select"
                label="Direct Manger"
                options={mangers}
                value={employee.manger}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Fieldset>

        <Fieldset title="Work From Home">
          <FormControlLabel
            control={
              <Checkbox
                name="isRemote"
                color="primary"
                value={employee.isRemote}
                onChange={handleChange}
              />
            }
            label="Allow Employee To Work From Home"
          />
        </Fieldset>

        <Divider />
        <Box
          sx={{
            pt: 1,
            columnGap: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button color="error" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Form;

const Fieldset = ({ title, children }) => (
  <Box component="fieldset" sx={{ p: 0, border: "none" }}>
    <Typography
      component="legend"
      color="warning.main"
      sx={{ pt: 2, pb: 3, fontWeight: 700 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);
