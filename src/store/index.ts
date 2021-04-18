import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reduces";
import createSagaMiddleware from 'redux-saga'
import { createHashHistory } from 'history'
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./sagas";
export const history = createHashHistory()

const sageMiddleware = createSagaMiddleware()

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history), sageMiddleware))
sageMiddleware.run(rootSaga)
export default store