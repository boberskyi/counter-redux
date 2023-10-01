import {INCREMENT_VALUE, RESET_VALUE, SET_MAX_VALUE, SET_MIN_VALUE, SET_START_VALUE} from "./actionTypes";

export type allCounterTypes = ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>;

export const incrementValueAC = (newValue:number) => {
    return {
        type: INCREMENT_VALUE,
        payload: {
            newValue
        }
    } as const
}
export const resetValueAC = (startValue:number) => {
    return {
        type: RESET_VALUE,
        payload: {
            startValue
        }
    } as const
}
export const setStartValueAC = (startValue:number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            startValue
        }
    } as const
}
export const setMinValueAC = (minValue:number) => {
    return {
        type: SET_MIN_VALUE,
        payload: {
            minValue
        }
    } as const
}
export const setMaxValueAC = (maxValue:number) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            maxValue
        }
    } as const
}