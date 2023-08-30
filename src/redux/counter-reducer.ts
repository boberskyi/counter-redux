import {storeType} from "./store";

const initialState:storeType = {
    valueCount: 0
};

export const counterReducer = (state = initialState, action: allCounterTypes) => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, valueCount: action.payload.newValue};
        }
        case 'RESET-VALUE': {
            return {...state, valueCount: 0};
        }
        default:
            return state;
    }
}

export type allCounterTypes = incrementValueACType | resetValueACACType;
type incrementValueACType = ReturnType<typeof incrementValueAC>;
type resetValueACACType = ReturnType<typeof resetValueAC>;

export const incrementValueAC = (newValue:number) => {
    return {
        type: 'INCREMENT-VALUE',
        payload: {
            newValue
        }
    } as const
}
export const resetValueAC = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}