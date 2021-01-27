import { combineReducers } from "redux";
import tasks from "./tasks/Tasks.reducers";

const createRootReducer = combineReducers({
  tasks,
});

export default createRootReducer;
