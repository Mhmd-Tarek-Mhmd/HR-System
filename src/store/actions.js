import { toggleTheme } from "./slices/theme";
import { openAlert, closeAlert } from "./slices/alert";
import { openModal, closeModal } from "./slices/modal";
import { add, update, remove } from "./slices/employees";
import { openBackdrop, closeBackdrop } from "./slices/backdrop";

export {
  add,
  update,
  remove,
  openModal,
  closeModal,
  openAlert,
  closeAlert,
  toggleTheme,
  openBackdrop,
  closeBackdrop,
};
