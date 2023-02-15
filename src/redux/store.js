import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import quizReducer from "./quizReducer";

const middlewares = [logger];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(quizReducer, applyMiddleware(...middlewares));

export default store;
