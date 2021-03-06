import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";

const middleWare = [];

if(process.env.NODE_ENV === 'development') {
    middleWare.push(logger);
}

export const store = createStore(rootReducer , applyMiddleware(...middleWare));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store , persistor};