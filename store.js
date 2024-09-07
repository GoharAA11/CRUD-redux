import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./src/feautures/UserList/userList.slice";

export const store=configureStore({
    reducer:userReducer
})