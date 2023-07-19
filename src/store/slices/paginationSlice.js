import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  currentName: "",
  currentStatus: "",
  currentSpecies: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentNameValue(state, action) {
      state.currentName = action.payload;
    },
    setCurrentSpeciesValue(state, action) {
      state.currentSpecies = action.payload;
    },
    setCurrentStatusValue(state, action) {
      state.currentStatus = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setCurrentStatusValue,
  setCurrentNameValue,
  setCurrentSpeciesValue,
} = paginationSlice.actions;
export default paginationSlice.reducer;
