import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
    name: "config",
    initialState: {
        pokemonsPerPage: 8,
        isDarkmode: false,
    },
    reducers: {
        // addPokemon: (state, action) => {
        //     state.push(action.payload);
        // },
    },
});

export const {} = configSlice.actions;

export default configSlice.reducer;
