import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoadingAction: (state, action) => {
      return {
        isLoading: action.payload,
      };
    },
  },
});
export const { setIsLoadingAction } = loadingSlice.actions;
export default loadingSlice.reducer;
