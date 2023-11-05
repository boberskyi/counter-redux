import {
    RESET_VALUE,
    SET_VALUES
} from "./actionTypes";
import {storeType} from "../store";
import {Dispatch} from "redux";

export type allCounterTypes = ReturnType<typeof resetValueAC> | ReturnType<typeof setValuesAC>;

export const resetValueAC = (startValue:number) => {
    return {
        type: RESET_VALUE ,
        payload: {
            startValue
        }
    } as const
}
export const setValuesAC = (valObj:storeType) => {
    return {
        type: SET_VALUES,
        payload: {
            valObj
        }
    } as const
}

export const setValuesTC = (valObj:storeType) => (dispatch:Dispatch) => {
    localStorage.setItem('counterValues', JSON.stringify(valObj));
    dispatch(setValuesAC(valObj));
}