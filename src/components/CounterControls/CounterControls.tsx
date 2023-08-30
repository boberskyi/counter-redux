import React from 'react';
import {BtnCounter} from "../BtnCounter/BtnCounter";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";
import {incrementValueAC, resetValueAC} from "../../redux/counter-reducer";

export const CounterControls = () => {
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);
    const dispatch = useDispatch();
    const incValue = () => dispatch(incrementValueAC(counter.valueCount + 1));
    const resetValue = () => dispatch(resetValueAC());
    return (
        <StyledCounterControls>
            <BtnCounter callback={incValue}
                        active={counter.valueCount === counter.maxValue}
            >
                inc
            </BtnCounter>
            <BtnCounter callback={resetValue}
                        active={counter.valueCount === 0}>
                reset
            </BtnCounter>
        </StyledCounterControls>
    );
};

const StyledCounterControls = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 2px solid #71dffd;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
