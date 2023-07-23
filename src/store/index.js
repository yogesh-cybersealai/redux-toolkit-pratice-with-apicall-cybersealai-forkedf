import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "./userSlice/userDetailSlice";


export const store = configureStore({
    reducer:{
        users:userDetailSlice,
    }
})
