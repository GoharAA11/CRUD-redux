import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllUsers = createAsyncThunk('users/all', async () => {
    const response = await axios.get("http://localhost:3004/users")
    return await response.data

})

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`)
    return id
})

export const createUser = createAsyncThunk('users/create', async (data) => {
    await axios.post('http://localhost:3004/users/', data)
    return data
})
export const updateUser = createAsyncThunk('users/update', async (user) => {
    const response = await axios.put(`http://localhost:3004/users/${user.id}`, user)
    return response.data;
})