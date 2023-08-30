import {counterReducer} from "./counter-reducer";
import {combineReducers, legacy_createStore} from "redux";

export type storeType = {
    valueCount: number
}


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer)


// @ts-ignore
window.store = store
