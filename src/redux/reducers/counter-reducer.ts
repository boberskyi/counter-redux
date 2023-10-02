import {storeType} from "../store";
import {allCounterTypes} from "../actions/actions";
import {INCREMENT_VALUE, RESET_VALUE, SET_MAX_VALUE, SET_MIN_VALUE, SET_START_VALUE} from "../actions/actionTypes";

const storedStartValue = Number(localStorage.getItem('startValue'));
const storedMinValue = Number(localStorage.getItem('minValue'));
const storedMaxValue = Number(localStorage.getItem('maxValue'));

const initialState:storeType = {
    startValue: storedStartValue ? storedStartValue : 1,
    minValue: storedMinValue ? storedMinValue : 1,
    maxValue: storedMaxValue ? storedMaxValue : 5
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