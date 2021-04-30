import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reduces'
import createSagaMiddleware from 'redux-saga'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
export const history = createHashHistory()

const sageMiddleware = createSagaMiddleware()

const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), sageMiddleware)))
sageMiddleware.run(rootSaga)
export default store
