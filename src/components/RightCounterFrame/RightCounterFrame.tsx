import React from 'react';
import {CounterControls} from "../CounterControls/CounterControls";
import {StyledDial, StyledRightCounterFrame} from "./RightCounterFrameStyles";
import {useAppSelector} from "../../hooks/hooks";

export const RightCounterFrame = () => {
    const counterStartValue = useAppSelector<number | undefined>(store => store.counter.startValue);
    const counterMaxValue = useAppSelector<number | undefined>(store => store.counter.maxValue);

    if (counterStartValue === undefined || counterMaxValue === undefined) {
        throw new Error('One or more values are undefined');
    }

    return (
        <StyledRightCounterFrame>
            <StyledDial error={counterStartValue >= counterMaxValue}
                        error_txt={counterStartValue > counterMaxValue}>
                {counterStartValue > counterMaxValue
                ? `Start value: ${counterStartValue} can't be greater then max value: ${counterMaxValue} `
                : counterStartValue}
            </StyledDial>
            <CounterControls />
        </StyledRightCounterFrame>
    );
};