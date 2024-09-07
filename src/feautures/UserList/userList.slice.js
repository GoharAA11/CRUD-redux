import { createSlice } from "@reduxjs/toolkit"
import { getAllUsers, deleteUser, createUser, updateUser } from "../../../api"





const UserListSlice = createSlice({
    name: "users",
    initialState: {
        users: [

        ],



    },
    extraReducers: builder => {
        builder

            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload

            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload)

            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.users = state.users.find(user => user.id == action.payload);
            })
    }


})

export const userReducer = UserListSlice.reducer