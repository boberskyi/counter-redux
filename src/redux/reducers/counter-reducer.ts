import {storeType} from "./store";

const initialState:storeType = {
    startValue: 0,
    minValue: 0,
    maxValue: 1
};

export const counterReducer = (state = initialState, action: allCounterTypes) => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, startValue: action.payload.newValue};
        }
        case 'RESET-VALUE': {
            return {...state, startValue: action.payload.startValue};
        }
        case "SET-MIN-VALUE": {
            return {...state, minValue: action.payload.minValue};
        }
        case "SET-START-VALUE": {
            return {...state, startValue: action.payload.startValue};
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.payload.maxValue};
        }
        default:
            return state;
    }
}

export type allCounterTypes = ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>;

export const incrementValueAC = (newValue:number) => {
    return {
        type: 'INCREMENT-VALUE',
        payload: {
            newValue
        }
    } as const
}
export const resetValueAC = (startValue:number) => {
    return {
        type: 'RESET-VALUE',
        payload: {
            startValue
        }
    } as const
}
export const setStartValueAC = (startValue:number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            startValue
        }
    } as const
}
export const setMinValueAC = (minValue:number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {
            minValue
        }
    } as const
}
export const setMaxValueAC = (maxValue:number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}