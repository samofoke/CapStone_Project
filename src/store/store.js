import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rooReducer } from "./root-reducer";

// we going to need a root reducer to be our man reducer.
//This will allows us to be able to generate a store.

export const store = createStore(rooReducer);
