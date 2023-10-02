import React from 'react';
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {StyledCounterControls} from "./CounterControlsStyles";
import {incrementValueAC, resetValueAC} from "../../redux/actions/actions";

export const CounterControls = () => {
    const counterStartValue = useSelector<AppRootStateType, number>(store => store.counter.startValue);
    const counterMinValue = useSelector<AppRootStateType, number>(store => store.counter.minValue);
    const counterMaxValue = useSelector<AppRootStateType, number>(store => store.counter.maxValue);

    const dispatch = useDispatch();
    const incValue = () => dispatch(incrementValueAC(counterStartValue + 1));
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