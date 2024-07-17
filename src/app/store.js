import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import {thunk} from "redux-thunk"; 
import { menuSlice } from "../features/menu/menuSlice";

let state = {
    owner: {},
    list: []
};


export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            list: cartSlice.reducer,
            owner: ownerSlice.reducer,
            menu: menuSlice.reducer
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    }
)