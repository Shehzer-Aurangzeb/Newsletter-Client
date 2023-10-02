import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: undefined,
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorAction: (state, action) => {
      return {
        error: action.payload,
      };
    },
  },
});
export const { setErrorAction } = errorSlice.actions;
export default errorSlice.reducer;
