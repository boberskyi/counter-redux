import {
    incrementValueAC,
    resetValueAC,
    setStartValueAC,
    setMinValueAC,
    setMaxValueAC,
} from '../actions/actions';
import {counterReducer} from "./counter-reducer"; // Import your action creators

// Define some initial state for testing
const initialState = {
    startValue: 0,
    minValue: 0,
    maxValue: 1,
};

describe('counterReducer', () => {
    it('should return the initial state', () => {
        const action = {} as ReturnType<typeof incrementValueAC>; // Create a valid action object
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    it('should handle INCREMENT_VALUE', () => {
        const action = incrementValueAC(42); // Use the action creator to create an action
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            startValue: 42,
        });
    });

    it('should handle RESET_VALUE', () => {
        const action = resetValueAC(10); // Use the action creator to create an action
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            startValue: 10,
        });
    });

    it('should handle SET_MIN_VALUE', () => {
        const action = setMinValueAC(5); // Use the action creator to create an action
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            minValue: 5,
        });
    });

    it('should handle SET_START_VALUE', () => {
        const action = setStartValueAC(20); // Use the action creator to create an action
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            startValue: 20,
        });
    });

    it('should handle SET_MAX_VALUE', () => {
        const action = setMaxValueAC(100); // Use the action creator to create an action
        const newState = counterReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            maxValue: 100,
        });
    });
});
