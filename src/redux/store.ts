import {counterReducer} from "./reducers/counter-reducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";

export type storeType = {
    startValue?: number,
    minValue?: number,
    maxValue?: number
}

const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>;


// @ts-ignore
window.store = store

