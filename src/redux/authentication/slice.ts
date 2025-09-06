import { createSlice } from "@reduxjs/toolkit";
import { Authentication, AuthenticationActions } from "../../interfaces/redux";

const initialState: Authentication = {
    isAuthenticated: false
}

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        update: (state: Authentication, action: AuthenticationActions) => {
            return {...state, ...action.payload}
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer

export const authenticationActions = slice.actions