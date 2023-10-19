import { CreateSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = CreateSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload), (state.loading = false);
      state.error = false;
    },
    signInStartFailure: (state, action) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.action;

export default userSlice.reducer;
