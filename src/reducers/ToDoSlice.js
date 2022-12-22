import { createSlice } from "@reduxjs/toolkit";
import { formActions } from "./ToDoFormSlice";

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [],
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addTask: (state,{payload, type}) => {
        state.push({...payload, date:new Date()})
      },
      setTask: (state,{payload, type}) => {
        state = payload
        return state
      },
      editTask: (state,{payload, type}) => {
        state[payload.index] = payload.value
        return state
      },
      removeTask: (state, {payload, type}) => {
        state = state.filter((task, index)=>index!==payload)
        return state
      },
      emptyTask: (state, {payload, type}) => {
        state = []
        return state
      },
    },
    
  });
  
  export const toDosActions = toDoSlice.actions;

  export const editTask = (index) => (dispatch, getState) => {
    const {toDoForm} = getState();
    dispatch(toDosActions.editTask({index:index, value:toDoForm}))
    dispatch(formActions.clearForm())
  };