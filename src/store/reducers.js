import themeSlice from "./slices/theme";
import modalSlice from "./slices/modal";
import alertSlice from "./slices/alert";
import backdropSlice from "./slices/backdrop";
import employeesSlice from "./slices/employees";

const reducer = {
  theme: themeSlice,
  modal: modalSlice,
  alert: alertSlice,
  backdrop: backdropSlice,
  employees: employeesSlice,
};

export default reducer;
