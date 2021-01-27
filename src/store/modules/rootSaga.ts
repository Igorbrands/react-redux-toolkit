import { all } from "redux-saga/effects";

import Tasks from "./Tasks/Tasks.saga";

export default function* createRootSaga() {
  return yield all([Tasks]);
}
