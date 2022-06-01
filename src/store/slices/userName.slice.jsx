import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
    name: "userName",
    initialState: "",
    reducers: {
        setUserName: (state, action) => action.payload,
    },
});

export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
