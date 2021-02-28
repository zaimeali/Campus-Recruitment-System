import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    uid: null,
    userDetails: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
    setUID: (state, action) => {
      state.uid = action.payload;
    },
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    removeUID: (state, action) => {
      state.uid = null;
    },
    removeUserDetail: (state, action) => {
      state.userDetail = null;
    },
  },
});

export default userSlice.reducer;
export const {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  setUID,
  setUserDetail,
  removeUID,
  removeUserDetail,
} = userSlice.actions;
