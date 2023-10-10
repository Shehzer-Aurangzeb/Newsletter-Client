import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAction: (state, action) => {
      return {
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    },
  },
});
export const { setUserAction } = userSlice.actions;
export default userSlice.reducer;
