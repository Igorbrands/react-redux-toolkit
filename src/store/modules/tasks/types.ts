import { AnyAction } from "redux";

/**
 * Action types
 */
export enum TasksActionTypes {
  ADD_TASK_IN_LIST_REQUEST = "@tasks/ADD_TASK_IN_LIST_REQUEST",
  ADD_TASK_IN_LIST_SUCESS = "@tasks/ADD_TASK_IN_LIST_SUCESS",
  REMOVE_TASK_IN_LIST_REQUEST = "@tasks/REMOVE_TASK_IN_LIST_REQUEST",
  REMOVE_TASK_IN_LIST_SUCESS = "@tasks/REMOVE_TASK_IN_LIST_SUCESS",
}

/**
 * Data types
 */
export interface Task {
  id: string;
  description: string;
}

export interface DefaultAction<T = any> extends AnyAction {
  type: TasksActionTypes;
  payload: T;
}

export interface ActionAddTaskInListRequest extends DefaultAction<string> {}

export interface ActionAddTaskInListSucess extends DefaultAction<Task[]> {}

export interface ActionRemoveTaskInListRequest extends DefaultAction<Task> {}

export interface ActionRemoveTaskInListSucess extends DefaultAction<Task[]> {}

/**
 * State type
 */
export interface TasksState {
  readonly list: Task[];
}
