import { all } from "redux-saga/effects";

import Tasks from "./tasks/Tasks.saga";

export default function* createRootSaga() {
  return yield all([Tasks]);
}
