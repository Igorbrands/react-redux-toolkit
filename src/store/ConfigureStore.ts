import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./modules/rootReducer";
import createRootSaga from "./modules/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(createRootSaga);

export default store;
