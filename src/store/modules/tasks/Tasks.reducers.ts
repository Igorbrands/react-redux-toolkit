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
        // addTaskInListSucess(draft, action);
        break;
      case TasksActionTypes.REMOVE_TASK_IN_LIST_SUCESS:
        draft.list = action.payload;
        // removeTaskInListSucess(draft, action);
        break;
      default:
        return state;
    }
  });
};

// function addTaskInListSucess(
//   draft: Draft<TasksState>,
//   action: ActionAddTaskInListSucess
// ) {
//   draft.list = action.payload;
// }

// function removeTaskInListSucess(
//   draft: Draft<TasksState>,
//   action: ActionRemoveTaskInListSucess
// ) {
//   draft.list = action.payload;
// }

export default reducer;
