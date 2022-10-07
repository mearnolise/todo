import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todo = JSON.parse(localStorage.getItem("todo"));

const initialState = {
  todo: todo ? todo : [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addlist: (state, action) => {
      state.todo = [
        { id: uuidv4(), text: action.payload, checked: false },
        ...state.todo,
      ];
    },
    deletelist: (state, action) => {
      const todoid = action.payload.id;
      state.todo = state.todo.filter((item) => item.id !== todoid);
    },
    editlist: (state, action) => {
      console.log(action.payload);
      const todo_update = state.todo.find(
        (item) => item.id === action.payload[0]
      );
      todo_update.text = action.payload[1];
      const todo_old = state.todo.filter(
        (item) => item.id !== action.payload[0]
      );
      state.todo = [todo_update, ...todo_old];
    },
  },
  extraReducers: (builder) => {},
});

export const { addlist, deletelist, editlist } = formSlice.actions;
export default formSlice.reducer;
//
