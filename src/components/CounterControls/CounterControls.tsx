import React from 'react';
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {useDispatch} from "react-redux";
import {StyledCounterControls} from "./CounterControlsStyles";
import {resetValueAC, setValuesAC} from "../../redux/actions/actions";
import {useAppSelector} from "../../hooks/hooks";

export const CounterControls = () => {
    const counterStartValue = useAppSelector<number | undefined>(store => store.counter.startValue);
    const counterMinValue = useAppSelector<number | undefined>(store => store.counter.minValue);
    const counterMaxValue = useAppSelector<number | undefined>(store => store.counter.maxValue);

    if (counterStartValue === undefined || counterMinValue === undefined || counterMaxValue === undefined) {
        throw new Error('One or more values are undefined');
    }

    const dispatch = useDispatch();
    const incValue = () => dispatch(setValuesAC({startValue: counterStartValue + 1}));
    const resetValue = () => dispatch(resetValueAC(counterMinValue));

    const isIncButtonActive = counterStartValue === counterMaxValue || counterStartValue > counterMaxValue;
    const isResetButtonActive = counterStartValue === counterMinValue;

    return (
        <StyledCounterControls>
            <BtnCounter callback={incValue} is_active={isIncButtonActive}>
                inc
            </BtnCounter>
            <BtnCounter callback={resetValue} is_active={isResetButtonActive}>
                reset
            </BtnCounter>
        </StyledCounterControls>
    );
};