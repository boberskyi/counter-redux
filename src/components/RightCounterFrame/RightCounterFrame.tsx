import React from 'react';
import {CounterControls} from "../CounterControls/CounterControls";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {StyledDial, StyledRightCounterFrame} from "./RightCounterFrameStyles";

export const RightCounterFrame = () => {
    const counterStartValue = useSelector<AppRootStateType, number>(store => store.counter.startValue);
    const counterMaxValue = useSelector<AppRootStateType, number>(store => store.counter.maxValue);

    return (
        <StyledRightCounterFrame>
            <StyledDial type="text"
                        tabIndex={-1}
                        readOnly
                        error={counterStartValue >= counterMaxValue}
                        error_txt={counterStartValue > counterMaxValue}
                        value={counterStartValue > counterMaxValue
                            ? `Start value: ${counterStartValue} can't be greater then max value: ${counterMaxValue} `
                            : counterStartValue} />
            <CounterControls />
        </StyledRightCounterFrame>
    );
};