import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../store/actions";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function Modal() {
  const dispatch = useDispatch();
  const { isOpen, title, desc, cb, children, Comp } = useSelector(
    (state) => state.modal
  );

  const handleClose = () => dispatch(closeModal());
  const handleSubmit = (e) => {
    e.preventDefault();
    cb(e);
    handleClose();
  };

  return (
    isOpen && (
      <Dialog open onClose={handleClose}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {desc && (
            <DialogContentText sx={{ mb: 1.5 }}>{desc}</DialogContentText>
          )}
          {Comp ? <Comp handleSubmit={handleSubmit} /> : children}
        </DialogContent>
      </Dialog>
    )
  );
}

export default Modal;
