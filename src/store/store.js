import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rooReducer } from "./root-reducer";

// we going to need a root reducer to be our man reducer.
//This will allows us to be able to generate a store.

// going to build middlewares which will run before we trigger reduces.
const middlewares = [logger];

//this will allow us to enhance our middlewares and compose is functional concept.
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rooReducer, undefined, composeEnhancers);
