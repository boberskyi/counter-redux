import React from 'react';
import styled from "styled-components";
import {CounterControls} from "../CounterControls/CounterControls";
import {useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";

export const RightCounterFrame = () => {
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);

    return (
        <StyledRightCounterFrame>
            <StyledDial type="text"
                        tabIndex={-1}
                        readOnly
                        error={counter.startValue >= counter.maxValue ? 'true' : undefined}
                        error_txt={counter.startValue > counter.maxValue ? 'true' : undefined}
                        value={counter.startValue > counter.maxValue
                            ? `Start value: ${counter.startValue} can't be greater then max value: ${counter.maxValue} `
                            : counter.startValue} />
            <CounterControls />
        </StyledRightCounterFrame>
    );
};

const StyledRightCounterFrame = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #71dffd;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
interface StyledBtnCounterType {
    error?: string | undefined,
    error_txt? : string | undefined
}
const StyledDial = styled.input<StyledBtnCounterType>`
  color: ${props => props.error ? 'red' : '#71dffd'};
  background-color: #34333e;
  width: 100%;
  pointer-events: none;
  border-radius: 5px;
  padding: 35px;
  font-size: ${props => props.error_txt ? '18px' : '100px'};
  font-weight: bold;
  text-align: center;
  border: 2px solid #71dffd;
  user-select: none;
`