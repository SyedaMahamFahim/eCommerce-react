import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import shoppingReducer from "./Shopping/ShoppingReducer";

const persistConfig={
  key:'root',
  storage,
  whitelist:['shop']
}
const rootReducer = combineReducers({
  shop: shoppingReducer, // 
});

export default persistReducer(persistConfig,rootReducer);
//This combineReducers is an inbuilt function of redux which combine all the reducers of reducx
//It takes an object 
//Here, we have created one reducers in our Shopping Folder and combine it with rootReducers
//In Object we name them as shop.
//First we have import the reducer which we have created in Shopping folder