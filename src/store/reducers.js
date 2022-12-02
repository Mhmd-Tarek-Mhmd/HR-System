import themeSlice from "./slices/theme";
import modalSlice from "./slices/modal";
import employeesSlice from "./slices/employees";

const reducer = {
  theme: themeSlice,
  modal: modalSlice,
  employees: employeesSlice,
};

export default reducer;
