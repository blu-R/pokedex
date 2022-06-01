import { configureStore } from "@reduxjs/toolkit";
import userName from "./slices/userName.slice";
import config from "./slices/config.slice";

export default configureStore({
    reducer: {
        userName,
        config,
    },
});
