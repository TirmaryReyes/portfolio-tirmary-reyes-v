import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure } from "../types";

const initialUserState: UserStateStructure = {
  name: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (
      _currentState: UserStateStructure,
      action: PayloadAction<UserStateStructure>
    ) => ({
      ...action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
