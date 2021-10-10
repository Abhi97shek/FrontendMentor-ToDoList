import { createStore,combineReducers } from "redux";
import ToDoReducer from "../reducers/toDoReducer";

const store = createStore(combineReducers({
    todoTask:ToDoReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;