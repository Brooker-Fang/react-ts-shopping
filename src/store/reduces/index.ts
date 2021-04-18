import { combineReducers } from "redux";
import testReducer from "./testReduce";

const rootReducer = combineReducers({
  test: testReducer
})
export default rootReducer