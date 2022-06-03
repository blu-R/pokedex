import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
    name: "config",
    initialState: {
        pokemonsPerPage: 16,
        isDarkmode: false,
    },
    reducers: {
        setPokemonsQuantity: (state, action) => {
            return { ...state, pokemonsPerPage: Number(action.payload) };
        },
    },
});

export const { setPokemonsQuantity } = configSlice.actions;

export default configSlice.reducer;
