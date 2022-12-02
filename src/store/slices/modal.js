import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  desc: "",
  cb: null,
  Comp: null,
  children: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => ({ ...action.payload, isOpen: true }),
    closeModal: () => initialState,
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
