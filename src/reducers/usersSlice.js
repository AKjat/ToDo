import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'usersSclice',
    initialState: [
        "Akshit",
        "Akshay",
        "Ankit"
    ],  
    reducers: {
      addUser: (state,{payload, type}) => {
        state.push(payload)
        return state
      },
    },
    
  });
  
  export const usersActions = usersSlice.actions;

export const userFormSlice = createSlice({
    name: 'usersForm',
    initialState: "" ,
    reducers: {
      setForm: (state,{payload, type}) => {
        state = payload
        return state
      },
      clearForm: (state) => {
        state=""
        return state
      },
    },
    
  });
  
  export const userFormActions = userFormSlice.actions;

  export const setUserForm = ( value) => (dispatch, getState) => {
    dispatch(userFormActions.setForm(value))
  };

  export const saveUserForm = (name, value) => (dispatch, getState) => {
    const {userForm} = getState();
    dispatch(usersActions.addUser(userForm))
    dispatch(userFormActions.clearForm())
  };