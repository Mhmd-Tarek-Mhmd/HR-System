import { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

const minLength = 6;
const handleEmailInput = (e) => {
  const pattern = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  e.target.setCustomValidity(
    !pattern.test(e.target.value) && !e.target.validity.valueMissing
      ? "Enter a valid email"
      : ""
  );
};

const styles = { outline: "none", height: 30, boxSizing: "border-box" };

function Input({ inputProps, label, options, ...props }) {
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleInput = (e) => {
    if (props.type === "email") handleEmailInput(e);
    setIsError(!e.target.checkValidity());
    setHelperText(e.target.validationMessage);
  };

  return (
    <InputLabel>
      <Typography
        component="strong"
        sx={{
          display: "block",
          color: ({ palette }) => palette.mode === "light" && "#313030",
        }}
      >
        {label}
      </Typography>
      {props.type === "select" ? (
        <Select
          {...props}
          sx={styles}
          size="small"
          label={label}
          required={props.required || true}
          fullWidth={props.fullWidth || true}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{ textTransform: "capitalize" }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          size="small"
          error={isError}
          placeholder={label}
          helperText={helperText}
          required={props.required || true}
          fullWidth={props.fullWidth || true}
          inputProps={Object.assign(
            {
              sx: styles,
              onBlur: handleInput,
              ...(props.type === "password" && { minLength }),
            },
            inputProps
          )}
          {...props}
        />
      )}
    </InputLabel>
  );
}

export default Input;
