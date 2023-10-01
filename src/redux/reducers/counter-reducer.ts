import {storeType} from "../store";
import {allCounterTypes} from "../actions/actions";
import {INCREMENT_VALUE, RESET_VALUE, SET_MAX_VALUE, SET_MIN_VALUE, SET_START_VALUE} from "../actions/actionTypes";

const initialState:storeType = {
    startValue: 0,
    minValue: 0,
    maxValue: 1
};

export const counterReducer = (state = initialState, action: allCounterTypes) => {
    switch (action.type) {
        case INCREMENT_VALUE: {
            return {...state, startValue: action.payload.newValue};
        }
        case RESET_VALUE: {
            return {...state, startValue: action.payload.startValue};
        }
        case SET_MIN_VALUE: {
            return {...state, minValue: action.payload.minValue};
        }
        case SET_START_VALUE: {
            return {...state, startValue: action.payload.startValue};
        }
        case SET_MAX_VALUE: {
            return {...state, maxValue: action.payload.maxValue};
        }
        default:
            return state;
    }
}