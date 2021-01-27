import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./modules/rootReducer";
import createRootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(createRootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(createRootSaga);

export default store;
