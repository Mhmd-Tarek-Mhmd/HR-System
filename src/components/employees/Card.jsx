import { useDispatch } from "react-redux";
import { useState, useLayoutEffect } from "react";

import { openModal, closeModal, remove } from "../../store/actions";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CardMui from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import CardContent from "@mui/material/CardContent";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import MoreDetails from "./MoreDetails";

function Card({ employee, handleModalOpen }) {
  const dispatch = useDispatch();
  const [isShowDetails, setIsShowDetails] = useState(false);
  const handleRemoveModalOpen = () => {
    dispatch(
      openModal({
        title: "Are you sure?",
        desc: "Once you deleted an employee, there is no going back. Please be certain",
        children: (
          <Confirm id={employee.id} onClose={() => dispatch(closeModal())} />
        ),
      })
    );
  };

  useLayoutEffect(() => {
    const clickHandler = () => setIsShowDetails(false);
    if (isShowDetails) {
      let timer = setTimeout(
        () => document.body.addEventListener("click", clickHandler),
        0
      );

      return () => {
        clearTimeout(timer);
        document.body.removeEventListener("click", clickHandler);
      };
    }
  }, [isShowDetails]);

  return (
    <CardMui component="article" sx={{ overflow: "unset" }}>
      <CardContent
        sx={{ display: "flex", alignItems: "center", columnGap: 2.5 }}
      >
        {/* Employee Image & Actions */}
        <Box
          sx={{ pr: 2.5, borderRight: "0.5px solid rgb(137 151 165 / 0.22)" }}
        >
          <Avatar
            src={employee.photoURL}
            alt={employee.name}
            sx={{ width: 64, height: 64, mx: "auto" }}
          />
          <Box sx={{ mt: 2, display: "flex" }}>
            <Tooltip arrow title="Edit">
              <IconButton onClick={() => handleModalOpen(employee)}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip arrow title="Pause">
              <IconButton>
                <PauseIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip arrow title="Delete">
              <IconButton onClick={handleRemoveModalOpen}>
                <DeleteForeverIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Employee Details */}
        <Box sx={{ flex: 1 }}>
          <Typography component="h3" variant="h5">
            {employee.name}
          </Typography>
          <Typography component="strong" sx={{ display: "block" }}>
            {employee.position}
          </Typography>
          <Typography
            component="span"
            sx={{ display: "block", color: "#5c6974", fontSize: "10px" }}
          >
            {employee.department}
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Status label={employee.attendance} />

            <Box sx={{ display: "flex", columnGap: 0.75 }}>
              <Tooltip arrow title={employee.email}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: ({ palette }) =>
                      palette.mode === "light" && "#eaeef0",
                  }}
                >
                  <EmailIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Tooltip>

              <Tooltip arrow title={employee.phone}>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: ({ palette }) =>
                      palette.mode === "light" && "#eaeef0",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Tooltip>

              <Tooltip
                arrow
                title={`${isShowDetails ? "Hide" : "Show"} more details`}
              >
                <IconButton
                  size="small"
                  onClick={() => setIsShowDetails(!isShowDetails)}
                  sx={{
                    position: "relative",
                    backgroundColor: ({ palette }) =>
                      palette.mode === "light" && "#eaeef0",
                  }}
                >
                  <PriorityHighIcon sx={{ fontSize: "1rem" }} />
                  <MoreDetails
                    employee={employee}
                    isShowDetails={isShowDetails}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </CardMui>
  );
}

export default Card;

const Confirm = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(remove(id));
    let timer = setTimeout(() => {
      dispatch(closeModal(id));
      return () => clearTimeout(timer);
    }, 100);
  };

  return (
    <Toolbar
      disableGutters
      sx={{
        top: 14,
        ml: "auto",
        columnGap: 1,
        width: "200px",
        position: "relative",
        justifyContent: "flex-end",
      }}
    >
      <Button color="error" onClick={handleDelete}>
        Confirm
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </Toolbar>
  );
};

const fallbackColor = "#8997a4";
const hex2rgb = (hex) =>
  `${parseInt(hex.slice(1, 3), 16)}, ${parseInt(
    hex.slice(3, 5),
    16
  )}, ${parseInt(hex.slice(5, 7), 16)}`;
const Status = ({ label }) => {
  let color = "";

  switch (label) {
    case "Present":
      color = "success.main";
      break;
    case "Absent":
      color = "error.main";
      break;
    case "Weekend":
      color = "primary.main";
      break;
    case "Holiday":
      color = "warning.main";
  }

  return (
    <Chip
      label={label}
      variant="filled"
      sx={{
        borderRadius: 0.5,
        height: 20,
        fontSize: 11,
        color: color ? color : fallbackColor,
        backgroundColor: ({ palette }) => {
          const hex = color ? palette[color.split(".")[0]].main : fallbackColor;
          return `rgba(${hex2rgb(hex)}, 0.15)`;
        },
      }}
    />
  );
};
