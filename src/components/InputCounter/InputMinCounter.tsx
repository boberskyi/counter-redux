import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";
import {setMinValueAC, setStartValueAC} from "../../redux/counter-reducer";

type InputCounterType = {
    error: boolean,
    changeInputVal: () => void
}
export const InputMinCounter:React.FC<InputCounterType> = ({error,...props}) => {
    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);
    const storedStartValue = Number(localStorage.getItem('startValue'));
    const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeInputVal();
        dispatch(setMinValueAC(Number(e.currentTarget.value)));
        dispatch(setStartValueAC(Number(e.currentTarget.value)));
        setNewMinVal(Number(e.currentTarget.value));
    }
    const [newMinVal, setNewMinVal] = useState(storedStartValue ? storedStartValue : counter.startValue);

    return (
        <StyledSettingsInput value={newMinVal} max={counter.maxValue} onChange={onInputChange} type='number' error={error ? 'true' : undefined}/>
    );
};

interface StyledSettingsInputType {
    error: string | undefined
}

const StyledSettingsInput = styled.input<StyledSettingsInputType>`
  padding: 10px; 
  text-align: center;
  border: 1px solid #71dffd;
  border-radius: 5px;
  font-weight: bold;
  
  background: ${props => props.error ? 'rgba(255,0,0,.4)' : '#fff'};
  color: ${props => props.error ? '#fff' : '#000'};
  
  &:focus {
    outline-color: #71dffd;
  }
`