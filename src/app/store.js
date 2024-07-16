import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlice";


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
            notes: notesSlice.reducer
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(
            [
              (store) => (next) => (action) => {
                console.log('Action', action);
                next(action);
              }
            ]
        )
    }
)