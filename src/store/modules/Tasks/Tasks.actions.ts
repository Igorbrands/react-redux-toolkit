import { action } from "typesafe-actions";
import { TasksActionTypes, Task } from "./types";

export const addTaskInListRequest = (data: string) =>
  action(TasksActionTypes.ADD_TASK_IN_LIST_REQUEST, data);

export const addTaskInListSucess = (data: Task[]) =>
  action(TasksActionTypes.ADD_TASK_IN_LIST_SUCESS, data);

export const removeTaskInListRequest = (data: Task) =>
  action(TasksActionTypes.REMOVE_TASK_IN_LIST_REQUEST, data);

export const removeTaskInListSucess = (data: Task[]) =>
  action(TasksActionTypes.REMOVE_TASK_IN_LIST_SUCESS, data);
