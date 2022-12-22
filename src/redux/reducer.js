import { combineReducers } from "@reduxjs/toolkit";
import { toDoFormSlice, toDoValidatorSlice } from "../reducers/ToDoFormSlice";
import { toDoSlice } from "../reducers/ToDoSlice";
import { userFormSlice, usersSlice } from './../reducers/usersSlice';

export const reducers = combineReducers({
    toDoForm: toDoFormSlice.reducer,
    toDos: toDoSlice.reducer,
    toDoFormValidator: toDoValidatorSlice.reducer,
    users: usersSlice.reducer,
    userForm: userFormSlice.reducer
})

