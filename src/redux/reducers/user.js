import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  emailVerified: "",
  uid: "",
  isAuthenticated: '',
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.emailVerified = action.payload.emailVerified;
      state.uid = action.payload.uid;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
