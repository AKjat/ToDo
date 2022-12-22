import { createSlice } from "@reduxjs/toolkit";
import { toDosActions } from "./ToDoSlice";

export const toDoFormSlice = createSlice({
    name: 'toDoForm',
    initialState: {},
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      setForm: (state,{payload, type}) => {
        state[payload.name] = payload.value
        return state
      },
      setEditForm: (state,{payload, type}) => {
        state = payload
        return state
      },
      clearForm: (state) => {
        state={}
        return state
      },
    },
    
  });
  
  export const formActions = toDoFormSlice.actions;

export const toDoValidatorSlice = createSlice({
    name: 'toDoValidator',
    initialState: {},
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      setValidator: (state,{payload, type}) => {
        state[payload.name] = payload.value
        return state
      },
      clearValidator: (state) => {
        state={}
        return state
      },
    },
    
  });
  
  export const formValidatorActions = toDoValidatorSlice.actions;

  export const saveForm = () => (dispatch, getState) => {
    const { toDoForm } = getState();
      dispatch(toDosActions.addTask(toDoForm));
      dispatch(formActions.clearForm())
  };