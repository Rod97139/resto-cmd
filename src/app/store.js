import { combineReducers, configureStore, createAction, createReducer } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";


let state = {
    owner: {},
    list: []
};


export const updateFirstName = createAction('UPDATE_FIRSTNAME', firstName => {
    return {
        payload: firstName
    }
})

const reducer = createReducer(state, (builder) => {
    builder
      .addCase(updateFirstName, (currentState, action) => {
        const owner = {...currentState.owner, firstName: action.payload}
        return {...currentState, ...owner}
      })
})


export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            list: cartSlice.reducer,
            owner: reducer
        })
    }
)