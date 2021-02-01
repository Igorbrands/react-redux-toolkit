import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { Task } from "./types";

const initialState: Task[] = [];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    list: initialState,
  },
  reducers: {
    addTaskInList(state, action: PayloadAction<string>) {
      const newTask: Task = { id: uuid(), description: action.payload };
      const newTasks = [...state.list, newTask];
      state.list = newTasks;
    },
    removeTaskInList(state, action: PayloadAction<Task>) {
      const newTasks = state.list.filter((task) => task.id !== action.payload.id);
      state.list = newTasks;
    },
  },
});

export const {addTaskInList,removeTaskInList} = tasks.actions;
export default tasks.reducer;
