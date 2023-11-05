import {storeType} from "../store";
import {allCounterTypes} from "../actions/actions";
import {
    RESET_VALUE,
    SET_VALUES
} from "../actions/actionTypes";

const initialState: storeType = {
    startValue: 1,
    minValue: 1,
    maxValue: 5
};

export const counterReducer = (state = initialState, action: allCounterTypes):storeType => {
    switch (action.type) {
        case RESET_VALUE: {
            return {...state, startValue: action.payload.startValue};
        }
        case SET_VALUES: {
            return {...state, ...action.payload.valObj};
        }
        default:
            return state;
    }
}