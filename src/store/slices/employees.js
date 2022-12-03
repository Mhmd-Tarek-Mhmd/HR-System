import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    add: (state, action) =>
      state ? [...state, action.payload] : [action.payload],
    update: (state, action) =>
      state.map((a) => (a.id === action.payload.id ? action.payload : a)),
    remove: (state, action) => state.filter((a) => a.id !== action.payload),
  },
});

export default employeesSlice.reducer;
export const { add, update, remove } = employeesSlice.actions;
