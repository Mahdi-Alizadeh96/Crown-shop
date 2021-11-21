import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import cartReducer from "./cart/cart-reducer";
import userReducer from "./user/user-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shopDATA/shop-reducer";


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
})

export default persistReducer(persistConfig ,rootReducer);