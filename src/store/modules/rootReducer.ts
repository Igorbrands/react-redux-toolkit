import { combineReducers } from "redux";
import tasks from "./Tasks/Tasks.reducers";

const createRootReducer = combineReducers({
  tasks,
});

export default createRootReducer;
