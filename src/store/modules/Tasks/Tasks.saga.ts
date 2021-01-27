import { all, takeLatest, put, select } from "redux-saga/effects";
import { addTaskInListSucess, removeTaskInListSucess } from "./Tasks.actions";
import {
  ActionAddTaskInListRequest,
  ActionRemoveTaskInListRequest,
  Task,
  TasksActionTypes,
  TasksState,
} from "./types";
import { ApplicationState } from "../../types";
import { v4 as uuid } from "uuid";

export function* addTaskInListRequest(data: ActionAddTaskInListRequest) {
  const tasksStore: TasksState = yield select(
    (state: ApplicationState) => state.tasks
  );

  try {
    const newTask: Task = { id: uuid(), description: data.payload };
    const newTasks = [...tasksStore.list, newTask];

    yield put(addTaskInListSucess(newTasks));
  } catch (error) {
    console.log(error);
  }
}

export function* removeTaskInListRequest(data: ActionRemoveTaskInListRequest) {
  const tasksStore: TasksState = yield select(
    (state: ApplicationState) => state.tasks
  );

  try {
    const newTasks = tasksStore.list.filter(
      (task) => task.id !== data.payload.id
    );

    yield put(removeTaskInListSucess(newTasks));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(TasksActionTypes.ADD_TASK_IN_LIST_REQUEST, addTaskInListRequest),
  takeLatest(
    TasksActionTypes.REMOVE_TASK_IN_LIST_REQUEST,
    removeTaskInListRequest
  ),
]);
