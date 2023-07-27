import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTokenStructure } from "../types";

const initialUserState: UserTokenStructure = {
  name: "",
  id: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (
      currentState: UserTokenStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...currentState,
      ...action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
