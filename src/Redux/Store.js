import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { registerUserFailed, registerUserRequest, registerUserSuccess } from "./GraphqlSlice";

const store = configureStore({
    reducer: {
        registerUser: registerUserSuccess,
        registerUser: registerUserRequest,
        registerUser: registerUserFailed,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;