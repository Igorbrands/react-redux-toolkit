// import produce, { Draft } from "immer";
import produce from "immer";
import { Reducer } from "redux";
import {
  DefaultAction,
  TasksState,
  TasksActionTypes,
  // ActionAddTaskInListSucess,
  // ActionRemoveTaskInListSucess,
} from "./types";
import { INITIAL_STATE } from "./Tasks.store";

const reducer: Reducer<TasksState> = (
  state = INITIAL_STATE,
  action: DefaultAction | any
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TasksActionTypes.ADD_TASK_IN_LIST_SUCESS:
        draft.list = action.payload;
        break;
      case TasksActionTypes.REMOVE_TASK_IN_LIST_SUCESS:
        draft.list = action.payload;
        break;
      default:
        return state;
    }
  });
};

// function addTaskInListSucess(
//   state: Draft<TasksState>,
//   action: ActionAddTaskInListSucess
// ) {
//   state.list = action.payload;
// }

// function removeTaskInListSucess(
//   state: Draft<TasksState>,
//   action: ActionRemoveTaskInListSucess
// ) {
//   state.list = action.payload;
// }

export default reducer;
