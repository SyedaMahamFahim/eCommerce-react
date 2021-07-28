import { createStore } from "redux";
import {persistStore} from 'redux-persist'
import rootReducer from "./rootReduceer";
import {composeWithDevTools} from 'redux-devtools-extension'

export const store=createStore(rootReducer,composeWithDevTools());
export const persistor=persistStore(store);


// eslint-disable-next-line import/no-anonymous-default-export
export default {store,persistor}

//npm install npm install redux react-redux --save