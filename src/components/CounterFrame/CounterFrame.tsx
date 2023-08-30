import React from 'react';
import styled from "styled-components";
import {CounterControls} from "../CounterControls/CounterControls";
import {useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";

export const CounterFrame = () => {
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);
    return (
        <StyledCounterFrame>
            <StyledDial type="number"
                        tabIndex={-1}
                        readOnly
                        value={counter.valueCount} />
            <CounterControls />
        </StyledCounterFrame>
    );
};

const StyledCounterFrame = styled.div`
  max-width: 350px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #71dffd;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const StyledDial = styled.input`
  color: #34333e;
  background-color: #71dffd;
  width: 100%;
  pointer-events: none;
  border: none;
  border-radius: 5px;
  padding: 35px;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
`