import { createSlice } from "@reduxjs/toolkit";

export const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState: {
    formData: {},
  },
  reducers: {
    setFormData: (state, action) => {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    },
  },
});

export const { setFormData } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
